
# Portfolio Website - Kridtayod Kunklangdon

**Live Demo** 

( https://kridtayod-portfolio.netlify.app )

เว็บไซต์ Portfolio ส่วนตัวสำหรับสมัครงานตำแหน่ง 

**Project Coordinator** พัฒนาด้วยเทคโนโลยี
Modern Frontend (Vanilla JS) เน้นความเร็ว ความเรียบง่าย และรองรับทุกอุปกรณ์

## คุณสมบัติเด่น

* ** Hybrid Theme :** ระบบสลับ Light/Dark Mode เพื่อถนอมสายตา

* ** fully Responsive :** แสดงผลสมบูรณ์แบบทั้งบน Desktop, Tablet และ Mobile

* ** SPA Experience :** การนำทางแบบ Single Page Application ไหลลื่น ไม่ต้องโหลดหน้าใหม่

* ** AI Integrated Showcase : ** แสดงผลงานระบบอัตโนมัติที่เชื่อมต่อ Gemini AI API

* ** Clean UI :** ออกแบบโดยเน้นความอ่านง่าย (Readability) ด้วยฟอนต์ Kanit


##  เทคโนโลยีที่ใช้

* **Core:** HTML5, CSS3 (Variables), JavaScript (ES6+)

* **Design:** Google Fonts (Kanit), Font Awesome 6

* **Deployment :** Netlify, GitHub Actions

## 📂 โครงสร้างโปรเจกต์

portfolio-kridtayod/
├── index.html          # โครงสร้างหลักของเว็บไซต์
├── css/
│   └── styles.css      # สไตล์และระบบ Theme (CSS Variables)
├── js/
│   └── main.js         # Theme Toggle, Mobile Menu และไฮไลต์เมนูตามตำแหน่งที่อ่าน
├── images/             # รูปภาพประกอบและโปรไฟล์
└── videos/             # วิดีโอสาธิตระบบอัตโนมัติ (GAS)

## ขั้นตอนการดำเนินการพัฒนา

### 1. การวางรากฐานโครงสร้าง (HTML Infrastructure)

* ออกแบบ Layout แบบ Semantic HTML เพื่อความปลอดภัยและ SEO
* แบ่ง Section หลัก: `Home`, `About`, `Skills`, `Showcase (AI)`, `Projects`, `Contact`
* ติดตั้ง Metadata สำหรับ Social Sharing (Open Graph)

### 2. การออกแบบระบบธีม (Styling & Theming)

* ใช้ **CSS Variables** ในการจัดการชุดสีหลัก เพื่อรองรับการสลับโหมด

* สร้าง Responsive Grid และ Flexbox สำหรับจัดวาง Layout

* ออกแบบ UI Components (Cards, Buttons) ให้มีความเป็น Modern Professional


### 3. การเพิ่มการตอบโต้ (JavaScript Interaction)

* **Theme Engine :** เขียน Logic สลับ Class `.dark-mode` และจัดเก็บค่าลงใน LocalStorage

* **Mobile Navigation :** สร้างเมนู Hamburger ที่ทำงานร่วมกับ CSS Transition

* **Smooth Navigation :** ใช้ JavaScript ดักจับเหตุการณ์คลิก เพื่อทำ Smooth Scroll แทนระบบเดิม

### 4. การผสานผลงาน AI Automation (Showcase Integration)

* เพิ่มส่วนแสดงวิดีโอสาธิตการใช้ **Google Apps Script** และ **Gemini AI**
* ปรับแต่งลิงก์ Web App ให้เป็นปุ่ม Call-to-Action ที่ชัดเจน

### 5. การตรวจสอบคุณภาพ (Quality Assurance)

* ทำ **Cross-browser Testing** (Chrome, Safari, Firefox, Edge)
* ทำ **Performance Optimization** (Lazy Loading รูปภาพ, มินิไฟล์ทรัพยากร)
* ทดสอบความไหลลื่นของ SPA Navigation


##  การติดตั้งและรันโปรเจกต์

# 1. Clone โปรเจกต์
git clone https://github.com/your-username/portfolio-kridtayod.git


# 2. เข้าสู่โฟลเดอร์

cd portfolio-kridtayod

# 3. รันผ่าน Live Server หรือเปิด index.html ได้ทันที


## Deploy

* **Netlify :** เพียงลากโฟลเดอร์โปรเจกต์วางบนแผงควบคุมของ Netlify
* **GitHub Pages :** ตั้งค่า Source ไปที่ Branch `main` ในเมนู Settings


## สัญญาอนุญาต

โปรเจกต์นี้อยู่ภายใต้ MIT License

https://www.google.com/search?q=LICENSE


## ติดต่อผู้พัฒนา

* **กฤตยชญ์ กุลกลางดอน**

*  Email: kunklangdon@gmail.com
