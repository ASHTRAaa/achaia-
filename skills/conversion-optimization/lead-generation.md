# Lead Generation & Form Integration

## 1. Contextual CTA Copy by Pillar

### Custom CRM Articles
> *"Need a CRM built around your business workflow rather than forcing your operations into generic SaaS boxes? Let's discuss your requirements."*

### Small Business Web Development Articles
> *"Planning a high-performance business website with genuine engineering rigor? Talk to our development team."*

### AI & Workflow Automation Articles
> *"Looking to automate repetitive business processes and connect fragmented APIs? Let's explore what can be automated."*

### Shopify & E-Commerce Articles
> *"Need custom Shopify theme development, Storefront API integrations, or ERP sync? Discuss your e-commerce project with us."*

### Recruitment & Talent Systems Articles
> *"Looking to streamline your candidate pipelines and placement workflows? Let's discuss a tailored software solution."*

---

## 2. API Contract & Payload Schema
The component submits directly to the existing production endpoint:
- **URL:** `POST https://www.sendmyform.live/api/f/contact-us`
- **Headers:** `{"Content-Type": "application/json", "Accept": "application/json"}`
- **Payload Shape:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Acme Realty",
  "service": "CRM Solutions",
  "message": "[Source: Blog / CRM for Real Estate Agents] Looking to evaluate custom lead pipeline tracking."
}
```

## 3. Form States & Micro-interactions
- **Initial:** Clean inputs with dark surface styling (`#181818`), 1px borders (`#303030`), and accessible placeholder contrast.
- **Submitting:** Disabled inputs, spinner animation, and clear "Sending inquiry..." button label.
- **Success:** Inline emerald checkmark confirmation card: "Thank you! Our engineering team will review your project and respond within 24 hours."
- **Error:** Inline crimson alert with retry action: "Unable to submit your message. Please check your network or email us directly at contact@achaialabs.tech."

