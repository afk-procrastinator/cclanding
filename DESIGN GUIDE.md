# Design Guidelines — Cover Companion

## Color Scheme
We use the Catppuccin Macchiato scheme.  These are the colors, their names, and basic functions. When I refer to the name of the color, this is what I mean. 

| Name | Hex Code | RGB | Function (Basic Functions) |
|------|----------|-----|----------------------------|
| Rosewater | #f4dbd6 | rgb(244, 219, 214) | Text cursor color |
| Flamingo | #f0c6c6 | rgb(240, 198, 198) | Accent color for UI elements |
| Pink | #f5bde6 | rgb(245, 189, 230) | Emphasis or highlight color |
| Mauve | #c6a0f6 | rgb(198, 160, 246) | Alternative accent color |
| Red | #ed8796 | rgb(237, 135, 150) | Error messages, critical alerts |
| Maroon | #ee99a0 | rgb(238, 153, 160) | Alternative error color |
| Peach | #f5a97f | rgb(245, 169, 127) | Warnings, cautions |
| Yellow | #eed49f | rgb(238, 212, 159) | Warning messages, highlights |
| Green | #a6da95 | rgb(166, 218, 149) | Success messages, positive feedback |
| Teal | #8bd5ca | rgb(139, 213, 202) | Alternative success color |
| Sky | #91d7e3 | rgb(145, 215, 227) | Information, neutral emphasis |
| Sapphire | #7dc4e4 | rgb(125, 196, 228) | Links, interactive elements |
| Blue | #8aadf4 | rgb(138, 173, 244) | Primary action color, links |
| Lavender | #b7bdf8 | rgb(183, 189, 248) | Subtle accents, secondary actions |
| Text | #cad3f5 | rgb(202, 211, 245) | Main text color |
| Subtext1 | #b8c0e0 | rgb(184, 192, 224) | Secondary text, labels |
| Subtext0 | #a5adcb | rgb(165, 173, 203) | Tertiary text, subtle labels |
| Overlay2 | #939ab7 | rgb(147, 154, 183) | Overlay backgrounds, tooltips |
| Overlay1 | #8087a2 | rgb(128, 135, 162) | Subtle UI element backgrounds |
| Overlay0 | #6e738d | rgb(110, 115, 141) | Subtle separators |
| Surface2 | #5b6078 | rgb(91, 96, 120) | Alternative surface color |
| Surface1 | #494d64 | rgb(73, 77, 100) | Secondary surface color |
| Surface0 | #363a4f | rgb(54, 58, 79) | Primary surface color |
| Base | #24273a | rgb(36, 39, 58) | Main background color |
| Mantle | #1e2030 | rgb(30, 32, 48) | Alternative background color |
| Crust | #181926 | rgb(24, 25, 38) | Lowest background color |

## Specifications
### Text
The font Inter is always used. All icons are Material icons. 

| Type | Font Color | Weight | Font Size |
|--|--|--|--|
| Body | Text | 400 | 16 |
| Header 1 | Text | 700 | 36 | 
| Header 2 | Subtext1 | 600 | 30 | 
| Header 3 | Subtext0 | 500 | 20 | 
| Header 4 | Overlay2 | 500 | 20 | 
| Header 5 | Overlay1 | 500 | 18 | 
| Header 6 | Overlay0 | 500 | 16 | 
| Above Input | Lavender | 500 | 14 |

### Buttons
- All buttons: 
	- Font size of 16px, weight 500
	- Border roundness of 8
	- Max height of 40px
	- Hover effects are 300ms

| Type | Background | Hover Effect | Font Color | 
| -- | -- | -- | -- |
| Primary | Teal | Background to Blue | Base | 
| Secondary | Surface0 | Background to Surface1 | Text |
| Tertiary | Transparent (1px Lavender border) | background to Lavender, 10% | Lavender |
| Danger | Red | Background to Maroon | Base |

### Input Fields
- All fields: 
	- Font size 16px. Placeholder is Overlay2, font color is Text
	- Background color is Surface1
	- On hover: 1px border to Blue
	- On focus: 1px border to Sapphire, background color to Surface2
	- On invalid: 1px border to Red
	 - Have text in Above Input style above to describe contents
	 - Hover effects are 300ms
