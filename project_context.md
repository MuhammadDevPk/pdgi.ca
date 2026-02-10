# PDGI Project Context & Implementation Guide

This document serves as the source of truth for the development of the [pdgi.ca](http://pdgi.ca) website. It combines the project brief, content strategy, and the established design system from the initial UI.

## Project Overview

PDGI provides a unified platform for fuel management and Transport Management System (TMS) services.

- **Fuel Portal**: Provides corporate fuel cards for drivers with weekly billing and special discounts/margins.
- **TMS**: An end-to-end fleet management system covering dispatch, tracking, payroll, invoicing, and compliance.
- **Driver App**: Mobile app (iOS/Android) for load management, live location tracking, and communication.

---

## Design System (Visual Identity)

Based on the existing UI at `index.html`, the following design tokens must be maintained across all new pages.

### Colors

| Name                   | Hex/Value                   | Usage                                       |
| :--------------------- | :-------------------------- | :------------------------------------------ |
| **TMS Pink**           | `#ff2d75`                   | Primary buttons, brand accents, highlights  |
| **TMS Cyan**           | `#22d3ee`                   | Secondary accents, status indicators, icons |
| **TMS Purple**         | `#a855f7`                   | Tertiary accents, gradients                 |
| **Background (Light)** | `#F8FAFC`                   | Main page background                        |
| **Background (Dark)**  | `black`                     | Dark mode background                        |
| **Glass**              | `rgba(255, 255, 255, 0.03)` | Card backgrounds and panels                 |
| **Border**             | `rgba(255, 255, 255, 0.1)`  | Subtle dividers and panels                  |

### Typography

- **Display Font**: `Space Grotesk` (for headings, hero sections)
- **Sans Font**: `Inter` (for body text, UI elements)

### Aesthetics

- **Style**: Futuristic, modern, sleek, glassmorphism.
- **Animations**: Subtle floating effects (`animate-float`), pulse glows, and GSAP-driven scroll triggers.
- **Components**: Rounded corners (`rounded-2xl`, `rounded-xl`), gradient text, and backdrop blurs.

---

## Site Structure & Content Plan

### 1. Home (`/`)

- **Hero**: "Manage fuel and fleets from one platform"
- **CTAs**: Primary: "Book a demo" | Secondary: "See Fuel Portal", "See TMS"
- **Product Cards**: Side-by-side overview of Fuel Portal and TMS.
- **Benefits**: Cards for Fleet Owners, Dispatchers, Accountants, and Drivers.

### 2. Fuel Portal (`/fuel-portal`)

- **Goal**: Highlight weekly billing, merchant discounts, and fraud controls.
- **Key Features**: Corporate cards, consolidated invoicing, spending limits, receipts capture.

### 3. TMS (`/tms`)

- **Goal**: Operational coverage from booking to invoicing.
- **Key Modules**: Load Management, Dispatch, Driver/Asset Management, Compliance, Payroll, QuickBooks sync.

### 4. Driver App (`/driver-app`)

- **Features**: Live location, ETA/Status updates, Chat, Digital POD/Signatures.

### 5. Other Key Pages

- **/integrations**: QuickBooks, Card Networks, GPS, ELDs.
- **/pricing**: Starter (Small Fleets), Growth, and Enterprise plans.
- **/demo**: Lead capture form with fleet size and interest fields.
- **/security**: PCI-DSS compliance, data protection, and encryption.
- **/about**, **/faq**, **/contact**, **/support**, **/terms**, **/privacy**.

---

## SEO & Meta Suggestions

- **Title Prefix**: "PDGI — "
- **Keywords**: Fuel Portal, Fleet TMS, Fuel cards, Dispatch, Tracking, QuickBooks Sync, Weekly Billing.

---

## Technical Notes

- **Framework**: Static HTML/Tailwind CSS with GSAP for animations.
- **Responsive**: Fully responsive design with mobile menu overlays.
- **Dark Mode**: Supports both light and dark modes via Tailwind `dark:` classes.

---

## Priority Checklist for Launch

1. [ ] Home page (hero, product cards, demo CTA)
2. [ ] Fuel Portal page (clear billing & features)
3. [ ] TMS page (core modules + screenshots)
4. [ ] Demo page + lead form
5. [ ] Integrations & Security pages
6. [ ] Driver App page
7. [ ] Contact, About, FAQ, Legal pages
