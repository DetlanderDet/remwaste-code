# 🟨 remwaste-code – Skip Selector App

A sleek, responsive skip size selector for **RemWaste**, built with **Vite**, **React**, and **Tailwind CSS**. It supports dynamic data from Payload CMS and provides a clean user experience for selecting the right skip.

---

## Features

-   Dynamic skip card rendering
-   Clean UI with background image integration
-   Price display with VAT support
-   Fully responsive layout
-   Sticky footer with selection summary
-   Dynamic step progress indicator
-   Organized file and component structure

---

## File Structure

---

## Our Approach

We designed `remwaste-code` with **clarity, responsiveness**, and a **modern user experience** in mind. Here's how we approached the build:

### Card Redesign

-   Cards include a **top image preview section** styled with `object-cover` and rounded corners.
-   On hover, cards **scale slightly** to enhance interactivity.
-   Selected cards are highlighted with a **yellow border and button**, using `#FAC415` to visually connect with the image tone.

### Organized Code Structure

-   Stepper data is stored in `stepsData.ts` for scalable step rendering.
-   API call logic is separated into `api.ts`, making it reusable and clean.
-   We’re using `mockData.ts` for skip data, but it’s built to support Payload CMS.

### Selection Logic

-   Skip selection is tracked with `selectedSkipId`.
-   Selecting a card visually updates the card UI and triggers the footer.
-   **Back** button clears the selection.
-   **Continue** button is styled but currently non-functional (ready for routing or next steps).

### Footer Behavior

-   The sticky footer appears **only when a card is selected**.
-   It displays a short summary and navigation buttons.
-   Footer buttons are animated and responsive for better UX.

---

## Stepper

The step progress indicator is dynamically rendered from `stepsData.ts`:

```ts
export const steps = [
  { icon: MapPin, label: "Postcode", active: true },
  { icon: Trash, label: "Waste Type", active: true },
  ...
];
```
