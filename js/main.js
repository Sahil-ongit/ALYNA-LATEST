// === Global Form Validation for all forms ===
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// === Password Toggle ===
function togglePassword() {
  const pwd = document.getElementById("password");
  if (pwd) {
    pwd.type = pwd.type === "password" ? "text" : "password";
  }
}

// === Signup Form Specific Logic ===
(() => {
  'use strict';
  const form = document.getElementById('signup-form');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const signupBtn = document.querySelector('.btn-left-signup');

  if (form && password && confirmPassword && signupBtn) {
    form.addEventListener('submit', e => {
      confirmPassword.setCustomValidity('');
      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
      }

      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }

      form.classList.add('was-validated');
    });

    signupBtn.addEventListener('click', function () {
      form.requestSubmit();
    });
  }
})();

// === Appointment Modal Logic ===
document.addEventListener('DOMContentLoaded', () => {
  const dateBtn = document.querySelector('#dateModal .btn.btn-dark-blue');
  const locationBtn = document.querySelector('#locationModal .btn.btn-dark-blue');
  const timeBtn = document.querySelector('#timeModal .btn.btn-dark-blue');
  const durationBtn = document.querySelector('#durationModal .btn.btn-dark-blue');

  if (dateBtn) {
    dateBtn.addEventListener('click', function () {
      const val = document.getElementById('modalDateInput').value;
      if (val) document.querySelector('#dateButton span').innerText = val;
    });
  }

  if (locationBtn) {
    locationBtn.addEventListener('click', function () {
      const val = document.getElementById('modalLocationInput').value;
      document.querySelector('#locationButton span').innerText = val;
    });
  }

  if (timeBtn) {
    timeBtn.addEventListener('click', function () {
      const val = document.getElementById('modalTimeInput').value;
      if (val) document.querySelector('#timeButton span').innerText = val;
    });
  }

  if (durationBtn) {
    durationBtn.addEventListener('click', function () {
      const val = document.getElementById('modalDurationInput').value;
      document.querySelector('#durationButton span').innerText = val;
    });
  }
});


// === cleaning-subscription  Specific Logic ===


document.querySelectorAll('.day-btn').forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      this.classList.remove('bg-tan', 'text-dark');
      this.classList.add('bg-dark', 'text-white');
    } else {
      this.classList.remove('bg-dark', 'text-white');
      this.classList.add('bg-tan', 'text-dark');
    }
  });
});



// === cart  Specific Logic ===


// Update dropdown button text on selection
document.addEventListener("DOMContentLoaded", function () {
  // For Laundry Item dropdown
  const laundryDropdownItems = document.querySelectorAll(".laundry-dropdown .dropdown-item");
  const laundryButton = document.querySelector(".laundry-dropdown .dropdown-toggle");

  laundryDropdownItems.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      laundryButton.textContent = this.textContent;
    });
  });

  // For QTY dropdown
  const qtyDropdownItems = document.querySelectorAll(".qty-dropdown .dropdown-item");
  const qtyButton = document.querySelector(".qty-dropdown .dropdown-toggle");

  qtyDropdownItems.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      qtyButton.textContent = this.textContent;
    });
  });
});

