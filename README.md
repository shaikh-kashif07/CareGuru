# CareGuru Foundation — Fundraiser Web Application

A responsive, high-performance web application designed for medical crowdfunding campaigns. Built with semantic HTML5, modern Vanilla CSS, Bootstrap 5 grid utilities, and Vanilla JavaScript.

---

## 🚀 Key Features

* **📱 Fully Responsive Navigation Header**:
  * **Desktop Layout (`≥ 992px`)**: Inline navbar containing Search, Campaign Links (*Start a free fundraiser*, *How it Works*, *Browse Fundraisers*), *Help Shiva* CTA button, Profile Login dropdown, and Currency Selector.
  * **Mobile & Tablet Layout (`< 992px`)**: Re-architected top header bar placing the **Currency Selector (`₹ INR ∨`)** directly on the top row beside the logo and hamburger toggler, while keeping navigation links, search, CTA button, and the **Profile Login Dropdown (`👤 ∨`)** inside the expanded drawer menu.
* **💳 Responsive Currency Switcher**: Real-time currency selector (`₹ INR`, `$ USD`, `£ GBP`) updating both desktop and mobile top-bar header elements simultaneously.
* **🖼️ Interactive Campaign Image Gallery**: Main photo viewer with next/previous carousel controls and synchronized thumbnail selection.
* **📊 Circular SVG Progress Tracker**: Dynamic stroke calculation displaying percentage raised against target campaign amount.
* **💬 Mobile-Optimized Comment System**: Flexbox-contained input box and full-width CTA button engineered to prevent card overflow across all screen widths.
* **📖 Story Expansion & Document Viewer**: Smooth accordion text expansion and interactive document preview panel.

---

## 🛠️ Architecture & Tech Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure, accessible modal triggers, and data attributes |
| **Vanilla CSS3** | Custom design system, custom CSS variables, and responsive `@media (max-width: 991.98px)` layout rules |
| **Bootstrap 5.3** | Grid system, modal popups, and navbar collapse functionality |
| **Vanilla JavaScript (ES6)** | DOM manipulation, circular SVG math, image sliders, and event handling |
| **FontAwesome 6** | Vector iconography |

---

## 📁 Core File Structure

The project relies on three primary standalone files starting with `new_`:

```text
C-new-fundraiser-main/
├── new_index.html   # Main application structure & semantic layout
├── new_style.css    # Custom styles, design tokens, & responsive media queries
├── new_app.js       # Dynamic UI logic, progress math, & slider handlers
└── README.md        # Technical project documentation
```

### Detailed File Descriptions

#### 1. `new_index.html`
* Header bar equipped with responsive `currency-dropdown-mobile` and `currency-dropdown-desktop`.
* Collapsible navigation drawer (`#navbarNav`) containing search input, navigation links, and `login-dropdown`.
* Main campaign hero section featuring circular SVG progress tracker, gallery controls, campaigner/beneficiary detail cards, story panel, document previewer, and comment box.

#### 2. `new_style.css`
* Custom design tokens, typography, and card box-shadow elevation.
* Media query breakdown (`@media (max-width: 991.98px)`) matching Bootstrap's `navbar-expand-lg` collapse threshold.
* Precise dropdown alignment (`left: 0 !important; right: auto !important;`) preventing menu clipping on small viewports.
* Responsive flex containment (`flex-wrap: wrap`) for `.comment-tab-bottom` ensuring inputs and buttons remain 100% contained inside campaign cards.

#### 3. `new_app.js`
* Executed safely inside `DOMContentLoaded` listeners with strict null-checks.
* `changeCurrency(text)`: Updates desktop (`#currencyLabel`) and mobile (`#currencyLabelMobile`) labels simultaneously.
* `postComment()`: Validates input content before emitting confirmation alerts.
* Circular progress calculation: Computes SVG `strokeDashoffset` dynamically based on raised funds vs. target goal.

---

## 🔧 Responsive Breakpoints & Engineering Rationale

### Mobile Navigation Drawer (`< 992px`)
To deliver a clean mobile experience matching design specifications:
* The **Currency Selector** remains accessible on the top bar at all times without requiring users to expand the hamburger menu.
* The **Login Dropdown (`👤 ∨`)** inside the expanded drawer uses `dropdown-menu-start` to open towards the right, avoiding negative offsets (`x < 0`) that cause left-side screen clipping on tablets and mobile devices.

### Comment Box Card Containment
On viewports under `992px`:
* The user avatar and text input sit side-by-side filling Row 1 (`flex: 1 1 calc(100% - 66px)`).
* The **POST** button wraps to Row 2 taking `100%` width, eliminating horizontal card overflow.

---

## 🚦 Getting Started

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/your-username/C-new-fundraiser.git
   cd C-new-fundraiser
   ```

2. **Run Locally**:
   Simply open `new_index.html` in any modern web browser or run using VS Code Live Server:
   ```bash
   npx serve .
   ```

---

## 📄 License & Credits

Designed & Developed for CareGuru Foundation / ImpactGuru Crowdfunding Platform. Built with Vanilla Web Technologies.