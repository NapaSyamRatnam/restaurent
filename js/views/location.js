/* ==========================================================================
   RESTAURANT LOCATION & TABLE RESERVATION VIEW
   ========================================================================== */

import { RESTAURANT_LOCATIONS } from '../data.js';
import { state } from '../state.js';
import { showToast } from '../components/toast.js';

export function renderLocationView(container) {
  const selectedLoc = state.selectedLocation;

  container.innerHTML = `
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> Restaurant Locations & Table Booking</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Find your nearest Savory Bites Bistro branch or reserve a dining table online.</p>
      </div>

      <div class="locations-grid">
        <!-- Branch Selector & Details -->
        <div>
          <h2 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1.25rem;">Select Bistro Branch</h2>
          
          <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2rem;">
            ${RESTAURANT_LOCATIONS.map(loc => `
              <div class="branch-card ${loc.id === selectedLoc.id ? 'active' : ''}" data-select-loc="${loc.id}" style="${loc.id === selectedLoc.id ? 'border-color: var(--primary); background: rgba(255, 107, 53, 0.04);' : ''} cursor: pointer;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 700;">${loc.name}</h3>
                  <span class="badge badge-gold"><i class="fa-solid fa-star"></i> ${loc.rating}</span>
                </div>

                <div style="font-size: 0.9rem; color: var(--text-sub); display: flex; flex-direction: column; gap: 0.4rem;">
                  <div><i class="fa-solid fa-map-pin" style="color: var(--primary);"></i> ${loc.address}</div>
                  <div><i class="fa-solid fa-phone"></i> ${loc.phone}</div>
                  <div><i class="fa-solid fa-clock"></i> ${loc.hours}</div>
                  <div><i class="fa-solid fa-truck"></i> Delivery Radius: ${loc.deliveryRadius} (${loc.avgDeliveryTime})</div>
                </div>

                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
                  ${loc.features.map(feat => `<span class="badge badge-primary">${feat}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Map Visual & Online Reservation Form -->
        <div>
          <!-- Mock Interactive Map Visual -->
          <div class="mock-map-container">
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255,107,53,0.15) 0%, rgba(15,17,21,0.9) 80%);"></div>
            <div class="map-pin-pulse" style="z-index: 2;">
              <i class="fa-solid fa-location-dot"></i>
              <span style="font-size: 0.85rem; font-weight: 700; color: #fff; background: rgba(0,0,0,0.8); padding: 0.3rem 0.8rem; border-radius: var(--radius-full); border: 1px solid var(--primary);">
                ${selectedLoc.name}
              </span>
            </div>
          </div>

          <!-- Table Reservation Form -->
          <div class="branch-card">
            <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-calendar-check" style="color: var(--primary);"></i> Online Table Reservation
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">Book a dining table at <strong>${selectedLoc.name}</strong> for your party.</p>

            <form id="reservation-form">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label class="form-label">Date</label>
                  <input type="date" id="res-date" class="form-input" required value="2026-08-05">
                </div>
                <div class="form-group">
                  <label class="form-label">Time</label>
                  <select id="res-time" class="form-select">
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00" selected>7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Number of Guests</label>
                <select id="res-guests" class="form-select">
                  <option value="2 Guests">2 Guests (Table for 2)</option>
                  <option value="4 Guests" selected>4 Guests (Family Table)</option>
                  <option value="6 Guests">6 Guests (Party)</option>
                  <option value="8+ Guests">8+ Guests (Private Room)</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Special Requests (Optional)</label>
                <input type="text" id="res-notes" class="form-input" placeholder="e.g. Birthday celebration, window seating, high chair...">
              </div>

              <button type="submit" class="btn btn-primary btn-full btn-lg">
                <i class="fa-solid fa-chair"></i> Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  // Branch Selector listeners
  document.querySelectorAll('[data-select-loc]').forEach(card => {
    card.onclick = () => {
      const id = card.getAttribute('data-select-loc');
      const loc = RESTAURANT_LOCATIONS.find(l => l.id === id);
      if (loc) {
        state.selectedLocation = loc;
        const locHeader = document.getElementById('header-location-name');
        if (locHeader) locHeader.textContent = loc.name;
        renderLocationView(container);
      }
    };
  });

  // Form submission
  const form = document.getElementById('reservation-form');
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const date = document.getElementById('res-date').value;
      const time = document.getElementById('res-time').value;
      const guests = document.getElementById('res-guests').value;

      showToast(`Table Reserved for ${guests} at ${selectedLoc.name} on ${date} @ ${time}!`, 'success', 5000);
      form.reset();
    };
  }
}
