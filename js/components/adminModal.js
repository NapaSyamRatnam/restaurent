/* ==========================================================================
   ADMIN MODALS FOR CREATING & EDITING MENU DISHES AND RESTAURANT LOCATIONS
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from './toast.js';
import { openModal, closeModal } from './modal.js';
import { CATEGORIES } from '../data.js';

export function openDishModal(dishToEdit = null) {
  if (!state.isAdmin()) {
    showToast('Admin permission required to manage items. Please log in as Admin.', 'info');
    state.setView('login');
    return;
  }

  const isEdit = !!dishToEdit;
  const title = isEdit ? `Edit Menu Item: ${dishToEdit.name}` : 'Add New Menu Item';

  const bodyHTML = `
    <form id="admin-dish-form">
      <div class="form-group">
        <label class="form-label">Dish Name *</label>
        <input type="text" id="dish-name" class="form-input" required value="${isEdit ? dishToEdit.name : ''}" placeholder="e.g. Nellore Special Royyala Biryani">
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Category *</label>
          <select id="dish-category" class="form-select">
            ${CATEGORIES.filter(c => c.id !== 'all' && c.id !== 'specials').map(c => `
              <option value="${c.id}" ${isEdit && dishToEdit.category === c.id ? 'selected' : ''}>${c.name}</option>
            `).join('')}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Price (₹) *</label>
          <input type="number" step="0.01" id="dish-price" class="form-input" required value="${isEdit ? dishToEdit.price : '250.00'}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Description *</label>
        <textarea id="dish-desc" class="form-input" rows="3" required placeholder="Describe the flavors, ingredients, and preparation...">${isEdit ? dishToEdit.description : ''}</textarea>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Preparation Time</label>
          <input type="text" id="dish-prep" class="form-input" value="${isEdit ? dishToEdit.prepTime : '15-20 min'}">
        </div>

        <div class="form-group">
          <label class="form-label">Calories</label>
          <input type="text" id="dish-calories" class="form-input" value="${isEdit ? dishToEdit.calories : '650 kcal'}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Image URL / Asset Path</label>
        <input type="text" id="dish-image" class="form-input" value="${isEdit ? dishToEdit.image : './assets/woodfired-pizza.png'}" placeholder="e.g. ./assets/woodfired-pizza.png or image URL">
      </div>

      <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 0.5rem; background: var(--bg-input); padding: 0.75rem; border-radius: var(--radius-md);">
        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-tag-special" ${isEdit && dishToEdit.tags?.includes('chefSpecial') ? 'checked' : ''}> Chef's Special
        </label>

        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-tag-veg" ${isEdit && dishToEdit.tags?.includes('veg') ? 'checked' : ''}> Vegetarian
        </label>

        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-tag-gf" ${isEdit && dishToEdit.tags?.includes('gf') ? 'checked' : ''}> Gluten-Free
        </label>

        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-instock" ${!isEdit || dishToEdit.inStock ? 'checked' : ''}> In Stock
        </label>
      </div>
    </form>
  `;

  const footerHTML = `
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
      ${isEdit ? `
        <button class="btn btn-outline" id="modal-delete-dish-btn" style="color: #ef4444; border-color: #ef4444;">
          <i class="fa-solid fa-trash"></i> Delete Dish
        </button>
      ` : '<div></div>'}
      
      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" id="modal-cancel-dish">Cancel</button>
        <button class="btn btn-primary" id="modal-save-dish">${isEdit ? 'Save Changes' : 'Create Dish'}</button>
      </div>
    </div>
  `;

  openModal({ title, bodyHTML, footerHTML });

  document.getElementById('modal-cancel-dish').onclick = closeModal;

  if (isEdit) {
    const deleteBtn = document.getElementById('modal-delete-dish-btn');
    if (deleteBtn) {
      deleteBtn.onclick = () => {
        if (confirm(`Are you sure you want to delete "${dishToEdit.name}"?`)) {
          state.deleteDish(dishToEdit.id);
          closeModal();
          showToast(`Deleted ${dishToEdit.name}`, 'info');
        }
      };
    }
  }

  document.getElementById('modal-save-dish').onclick = () => {
    const name = document.getElementById('dish-name').value.trim();
    const category = document.getElementById('dish-category').value;
    const price = parseFloat(document.getElementById('dish-price').value) || 0;
    const description = document.getElementById('dish-desc').value.trim();
    const prepTime = document.getElementById('dish-prep').value.trim();
    const calories = document.getElementById('dish-calories').value.trim();
    const image = document.getElementById('dish-image').value.trim();

    const tags = [];
    if (document.getElementById('dish-tag-special').checked) tags.push('chefSpecial');
    if (document.getElementById('dish-tag-veg').checked) tags.push('veg');
    if (document.getElementById('dish-tag-gf').checked) tags.push('gf');

    const inStock = document.getElementById('dish-instock').checked;

    if (!name || !description || price <= 0) {
      showToast('Please fill in dish name, price and description', 'info');
      return;
    }

    const dishPayload = {
      name,
      category,
      price,
      description,
      prepTime,
      calories,
      image: image || './assets/woodfired-pizza.png',
      tags,
      inStock
    };

    if (isEdit) {
      state.updateDish(dishToEdit.id, dishPayload);
      showToast(`Updated dish: ${name}`, 'success');
    } else {
      state.addDish(dishPayload);
      showToast(`Added new dish: ${name}`, 'success');
    }

    closeModal();
  };
}

export function openLocationModal(locToEdit = null) {
  if (!state.isAdmin()) {
    showToast('Admin permission required to manage locations. Please log in as Admin.', 'info');
    state.setView('login');
    return;
  }

  const isEdit = !!locToEdit;
  const title = isEdit ? `Edit Branch: ${locToEdit.name}` : 'Add New Restaurant Branch';

  const bodyHTML = `
    <form id="admin-loc-form">
      <div class="form-group">
        <label class="form-label">Branch Name *</label>
        <input type="text" id="loc-name" class="form-input" required value="${isEdit ? locToEdit.name : ''}" placeholder="e.g. Trunk Road Plaza, Nellore">
      </div>

      <div class="form-group">
        <label class="form-label">Full Address *</label>
        <input type="text" id="loc-address" class="form-input" required value="${isEdit ? locToEdit.address : ''}" placeholder="e.g. Trunk Road, Near VRC Centre, Nellore, Andhra Pradesh 524001">
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input type="text" id="loc-phone" class="form-input" required value="${isEdit ? locToEdit.phone : '+91 861 234 5678'}">
        </div>

        <div class="form-group">
          <label class="form-label">Opening Hours</label>
          <input type="text" id="loc-hours" class="form-input" value="${isEdit ? locToEdit.hours : 'Daily: 10:30 AM - 11:00 PM'}">
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Delivery Radius</label>
          <input type="text" id="loc-radius" class="form-input" value="${isEdit ? locToEdit.deliveryRadius : '7 km'}">
        </div>

        <div class="form-group">
          <label class="form-label">Avg Delivery Time</label>
          <input type="text" id="loc-time" class="form-input" value="${isEdit ? locToEdit.avgDeliveryTime : '20-30 min'}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Features / Amenities (comma separated)</label>
        <input type="text" id="loc-features" class="form-input" value="${isEdit ? locToEdit.features.join(', ') : 'AC Dining, Valet Parking, Family Section'}" placeholder="e.g. AC Dining, Rooftop, Parking">
      </div>
    </form>
  `;

  const footerHTML = `
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
      ${isEdit ? `
        <button class="btn btn-outline" id="modal-delete-loc-btn" style="color: #ef4444; border-color: #ef4444;">
          <i class="fa-solid fa-trash"></i> Delete Branch
        </button>
      ` : '<div></div>'}

      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" id="modal-cancel-loc">Cancel</button>
        <button class="btn btn-primary" id="modal-save-loc">${isEdit ? 'Save Branch' : 'Add Branch'}</button>
      </div>
    </div>
  `;

  openModal({ title, bodyHTML, footerHTML });

  document.getElementById('modal-cancel-loc').onclick = closeModal;

  if (isEdit) {
    const deleteBtn = document.getElementById('modal-delete-loc-btn');
    if (deleteBtn) {
      deleteBtn.onclick = () => {
        if (confirm(`Are you sure you want to delete branch "${locToEdit.name}"?`)) {
          const res = state.deleteLocation(locToEdit.id);
          if (!res.success) {
            showToast(res.message, 'info');
          } else {
            closeModal();
            showToast(`Deleted branch ${locToEdit.name}`, 'info');
          }
        }
      };
    }
  }

  document.getElementById('modal-save-loc').onclick = () => {
    const name = document.getElementById('loc-name').value.trim();
    const address = document.getElementById('loc-address').value.trim();
    const phone = document.getElementById('loc-phone').value.trim();
    const hours = document.getElementById('loc-hours').value.trim();
    const deliveryRadius = document.getElementById('loc-radius').value.trim();
    const avgDeliveryTime = document.getElementById('loc-time').value.trim();
    const featuresRaw = document.getElementById('loc-features').value.trim();

    const features = featuresRaw ? featuresRaw.split(',').map(f => f.trim()).filter(Boolean) : [];

    if (!name || !address || !phone) {
      showToast('Please fill in branch name, address and phone', 'info');
      return;
    }

    const locPayload = {
      name,
      address,
      phone,
      hours,
      deliveryRadius,
      avgDeliveryTime,
      features
    };

    if (isEdit) {
      state.updateLocation(locToEdit.id, locPayload);
      showToast(`Updated branch: ${name}`, 'success');
    } else {
      state.addLocation(locPayload);
      showToast(`Added branch: ${name}`, 'success');
    }

    closeModal();
  };
}

export function openReservationModal(resToEdit = null) {
  if (!state.isAdmin()) {
    showToast('Admin permission required. Please log in as Admin.', 'info');
    state.setView('login');
    return;
  }

  const isEdit = !!resToEdit;
  const title = isEdit ? `Manage Reservation: ${resToEdit.id}` : 'Create New Table Reservation';

  const bodyHTML = `
    <form id="admin-reservation-form">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Customer Name *</label>
          <input type="text" id="admin-res-name" class="form-input" required value="${isEdit ? resToEdit.customerName : ''}" placeholder="Customer full name">
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input type="tel" id="admin-res-phone" class="form-input" required value="${isEdit ? resToEdit.phone : ''}" placeholder="+91 Mobile number">
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Restaurant Branch *</label>
          <select id="admin-res-branch" class="form-select">
            ${state.locations.map(loc => `
              <option value="${loc.id}" ${isEdit && resToEdit.locationId === loc.id ? 'selected' : ''}>${loc.name}</option>
            `).join('')}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Status *</label>
          <select id="admin-res-status" class="form-select">
            <option value="pending" ${isEdit && resToEdit.status === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="confirmed" ${!isEdit || (isEdit && resToEdit.status === 'confirmed') ? 'selected' : ''}>Confirmed</option>
            <option value="completed" ${isEdit && resToEdit.status === 'completed' ? 'selected' : ''}>Completed</option>
            <option value="cancelled" ${isEdit && resToEdit.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Date *</label>
          <input type="date" id="admin-res-date" class="form-input" required value="${isEdit ? resToEdit.date : new Date().toISOString().split('T')[0]}">
        </div>

        <div class="form-group">
          <label class="form-label">Time *</label>
          <select id="admin-res-time" class="form-select">
            <option value="18:00" ${isEdit && resToEdit.time === '18:00' ? 'selected' : ''}>6:00 PM</option>
            <option value="19:00" ${!isEdit || (isEdit && resToEdit.time === '19:00') ? 'selected' : ''}>7:00 PM</option>
            <option value="20:00" ${isEdit && resToEdit.time === '20:00' ? 'selected' : ''}>8:00 PM</option>
            <option value="21:00" ${isEdit && resToEdit.time === '21:00' ? 'selected' : ''}>9:00 PM</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Guests *</label>
          <select id="admin-res-guests" class="form-select">
            <option value="2 Guests" ${isEdit && resToEdit.guests === '2 Guests' ? 'selected' : ''}>2 Guests</option>
            <option value="4 Guests" ${!isEdit || (isEdit && resToEdit.guests === '4 Guests') ? 'selected' : ''}>4 Guests</option>
            <option value="6 Guests" ${isEdit && resToEdit.guests === '6 Guests' ? 'selected' : ''}>6 Guests</option>
            <option value="8+ Guests" ${isEdit && resToEdit.guests === '8+ Guests' ? 'selected' : ''}>8+ Guests</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Special Requests (Optional)</label>
        <input type="text" id="admin-res-notes" class="form-input" value="${isEdit ? (resToEdit.specialRequests || '') : ''}" placeholder="Window table, birthday, allergy notes...">
      </div>
    </form>
  `;

  const footerHTML = `
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
      ${isEdit ? `
        <button class="btn btn-outline" id="modal-delete-res-btn" style="color: #ef4444; border-color: #ef4444;">
          <i class="fa-solid fa-trash"></i> Cancel Reservation
        </button>
      ` : '<div></div>'}

      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" id="modal-cancel-res">Close</button>
        <button class="btn btn-primary" id="modal-save-res">${isEdit ? 'Update Reservation' : 'Create Reservation'}</button>
      </div>
    </div>
  `;

  openModal({ title, bodyHTML, footerHTML });

  document.getElementById('modal-cancel-res').onclick = closeModal;

  if (isEdit) {
    const delBtn = document.getElementById('modal-delete-res-btn');
    if (delBtn) {
      delBtn.onclick = async () => {
        if (confirm(`Cancel reservation for ${resToEdit.customerName}?`)) {
          await state.deleteReservation(resToEdit.id);
          closeModal();
          showToast(`Cancelled reservation ${resToEdit.id}`, 'info');
        }
      };
    }
  }

  document.getElementById('modal-save-res').onclick = async () => {
    const customerName = document.getElementById('admin-res-name').value.trim();
    const phone = document.getElementById('admin-res-phone').value.trim();
    const locId = document.getElementById('admin-res-branch').value;
    const locObj = state.locations.find(l => l.id === locId) || state.locations[0];
    const status = document.getElementById('admin-res-status').value;
    const date = document.getElementById('admin-res-date').value;
    const time = document.getElementById('admin-res-time').value;
    const guests = document.getElementById('admin-res-guests').value;
    const notes = document.getElementById('admin-res-notes').value.trim();

    if (!customerName || !phone) {
      showToast('Please enter customer name and phone number', 'info');
      return;
    }

    if (isEdit) {
      resToEdit.customerName = customerName;
      resToEdit.phone = phone;
      resToEdit.locationId = locObj.id;
      resToEdit.locationName = locObj.name;
      resToEdit.date = date;
      resToEdit.time = time;
      resToEdit.guests = guests;
      resToEdit.specialRequests = notes;
      await state.updateReservationStatus(resToEdit.id, status);
      showToast(`Updated reservation for ${customerName}`, 'success');
    } else {
      await state.addReservation({
        customerName,
        phone,
        locationId: locObj.id,
        locationName: locObj.name,
        date,
        time,
        guests,
        specialRequests: notes,
        status
      });
      showToast(`Created table reservation for ${customerName}`, 'success');
    }

    closeModal();
  };
}

