/* ==========================================================================
   ADMIN MODALS FOR CREATING & EDITING MENU DISHES AND RESTAURANT LOCATIONS
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from './toast.js';
import { openModal, closeModal } from './modal.js';
import { CATEGORIES } from '../data.js';

export function openDishModal(dishToEdit = null) {
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
          <label class="form-label">Price ($ / ₹ equivalent) *</label>
          <input type="number" step="0.01" id="dish-price" class="form-input" required value="${isEdit ? dishToEdit.price : '15.99'}">
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
