# Career AI Platform - Homepage UI/UX Design Specifications

## Table of Contents
1. [Design Philosophy & Principles](#1-design-philosophy--principles)
2. [Visual Design System](#2-visual-design-system)
3. [Hero Section Design](#3-hero-section-design)
4. [Feature Showcase Design](#4-feature-showcase-design)
5. [User Journey & CTA Design](#5-user-journey--cta-design)
6. [Social Proof & Trust Elements](#6-social-proof--trust-elements)
7. [Interactive Elements & Animations](#7-interactive-elements--animations)
8. [Responsive Design Specifications](#8-responsive-design-specifications)
9. [Accessibility & Performance](#9-accessibility--performance)
10. [Implementation Guidelines](#10-implementation-guidelines)

---

## 1. Design Philosophy & Principles

### **Core Design Philosophy**
"Intelligent Career Discovery Through Elegant Simplicity"

### **Design Principles**

#### **Clarity Above All**
- **Information Hierarchy**: Clear visual hierarchy guides user attention
- **Minimal Distractions**: Focus on core value proposition
- **Scannable Content**: Users should grasp key messages in 3-5 seconds
- **Progressive Disclosure**: Reveal complexity as users engage

#### **Trust & Professionalism**
- **Academic Credibility**: Design reflects university standards
- **Tech Innovation**: Modern aesthetics showcase AI capabilities
- **Approachable AI**: Friendly, non-intimidating AI presentation
- **Data Security**: Visual cues for trust and privacy

#### **Action-Oriented Design**
- **Clear CTAs**: Every section drives toward user action
- **Low Friction**: Minimal steps to get started
- **Value First**: Show benefits before asking for commitment
- **Guided Journey**: Clear path from discovery to engagement

---

## 2. Visual Design System

### **Color Palette**

#### **Primary Colors**
```css
/* Primary Brand Colors */
--primary-indigo: #6366f1;
--primary-purple: #8b5cf6;
--primary-cyan: #06b6d4;

/* Gradient Definitions */
--gradient-primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
--gradient-secondary: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
--gradient-accent: linear-gradient(135deg, #06b6d4 0%, #6366f1 100%);
```

#### **Background Colors**
```css
/* Dark Theme (Current) */
--bg-primary: #0f172a;      /* slate-900 */
--bg-secondary: #1e293b;    /* slate-800 */
--bg-tertiary: #334155;     /* slate-700 */

/* Light Theme (Alternative) */
--bg-primary-light: #ffffff;
--bg-secondary-light: #f8fafc;
--bg-tertiary-light: #f1f5f9;
```

#### **Text Colors**
```css
/* Dark Theme */
--text-primary: #f1f5f9;    /* slate-100 */
--text-secondary: #94a3b8;  /* slate-400 */
--text-tertiary: #64748b;   /* slate-500 */

/* Accent Colors */
--text-accent: #60a5fa;     /* blue-400 */
--text-success: #34d399;    /* emerald-400 */
--text-warning: #fbbf24;    /* amber-400 */
--text-error: #f87171;      /* red-400 */
```

### **Typography System**

#### **Font Hierarchy**
```css
/* Display Fonts */
--font-display: 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;

/* Font Sizes */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-7xl: 4.5rem;     /* 72px */
--text-8xl: 6rem;       /* 96px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

#### **Line Heights**
```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
--leading-loose: 2;
```

### **Spacing System**
```css
/* Spacing Scale (8px base unit) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### **Border Radius & Shadows**
```css
/* Border Radius */
--radius-sm: 0.375rem;    /* 6px */
--radius-md: 0.5rem;      /* 8px */
--radius-lg: 0.75rem;     /* 12px */
--radius-xl: 1rem;        /* 16px */
--radius-2xl: 1.5rem;     /* 24px */
--radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
--shadow-glow: 0 0 20px rgb(99 102 241 / 0.3);
```

---

## 3. Hero Section Design

### **Layout Structure**
```
[Navigation Bar]
[Hero Background Effects]
[Hero Content Container]
  [Headline]
  [Subheadline]
  [CTA Buttons]
  [Social Proof]
[Animated Elements]
```

### **Hero Content Design**

#### **Headline Typography**
```css
.hero-headline {
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  background: var(--gradient-primary);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
}
```

#### **Subheadline Design**
```css
.hero-subheadline {
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 42rem;
  margin: 0 auto 3rem;
}
```

#### **CTA Button Design**
```css
.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl), var(--shadow-glow);
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--primary-indigo);
  border-radius: var(--radius-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-secondary:hover {
  background: var(--primary-indigo);
  border-color: var(--primary-indigo);
  transform: translateY(-2px);
}
```

### **Background Effects Design**

#### **Animated Gradient Orbs**
```css
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 6s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--primary-indigo) 0%, transparent 70%);
  top: -200px;
  left: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, var(--primary-purple) 0%, transparent 70%);
  top: 50%;
  right: -175px;
  animation-delay: 2s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--primary-cyan) 0%, transparent 70%);
  bottom: -150px;
  left: 30%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}
```

#### **Grid Pattern Overlay**
```css
.hero-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
}
```

### **Mobile Hero Design**
```css
@media (max-width: 768px) {
  .hero-headline {
    font-size: clamp(2rem, 10vw, 3.5rem);
    line-height: 1.2;
  }
  
  .hero-subheadline {
    font-size: 1.125rem;
    padding: 0 1rem;
  }
  
  .cta-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
```

---

## 4. Feature Showcase Design

### **Feature Grid Layout**
```
[Section Header]
[Feature Grid]
  [Feature Card 1] [Feature Card 2]
  [Feature Card 3] [Feature Card 4]
  [Feature Card 5] [Feature Card 6]
[Visual Elements]
```

### **Feature Card Design**

#### **Card Structure**
```css
.feature-card {
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: var(--radius-xl);
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary-indigo);
  box-shadow: var(--shadow-xl), 0 0 30px rgba(99, 102, 241, 0.2);
}

.feature-card:hover::before {
  opacity: 0.05;
}
```

#### **Icon Design**
```css
.feature-icon {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.5rem;
  background: var(--gradient-primary);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  position: relative;
}

.feature-icon::after {
  content: '';
  position: absolute;
  inset: -2px;
  background: var(--gradient-primary);
  border-radius: inherit;
  z-index: -1;
  opacity: 0.3;
  filter: blur(8px);
}
```

#### **Feature Typography**
```css
.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-indigo);
  font-weight: 600;
  text-decoration: none;
  transition: gap 0.2s ease;
}

.feature-link:hover {
  gap: 1rem;
}
```

### **Feature Categories**

#### **AI-Powered Features**
```css
.feature-ai {
  border-left: 4px solid var(--primary-purple);
}

.feature-ai .feature-icon {
  background: linear-gradient(135deg, var(--primary-purple), var(--primary-indigo));
}
```

#### **Career Features**
```css
.feature-career {
  border-left: 4px solid var(--primary-cyan);
}

.feature-career .feature-icon {
  background: linear-gradient(135deg, var(--primary-cyan), var(--primary-indigo));
}
```

#### **Job Features**
```css
.feature-job {
  border-left: 4px solid var(--primary-indigo);
}

.feature-job .feature-icon {
  background: linear-gradient(135deg, var(--primary-indigo), var(--primary-purple));
}
```

---

## 5. User Journey & CTA Design

### **Primary User Journey**
```
Homepage Landing
    [Hero CTA: Get Started]
        [Registration/Login]
            [Onboarding Flow]
                [Resume Upload]
                    [Career Assessment]
                        [AI Recommendations]
                            [Job Search]
```

### **CTA Strategy Design**

#### **Primary CTA (Get Started)**
```css
.cta-primary-hero {
  background: var(--gradient-primary);
  color: white;
  padding: 1.25rem 3rem;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
}

.cta-primary-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.cta-primary-hero:hover::before {
  transform: translateX(100%);
}

.cta-primary-hero:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-2xl), 0 0 40px rgba(99, 102, 241, 0.4);
}
```

#### **Secondary CTA (Learn More)**
```css
.cta-secondary-hero {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid rgba(99, 102, 241, 0.5);
  padding: 1.125rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  transition: all 0.3s ease;
}

.cta-secondary-hero:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: var(--primary-indigo);
  transform: translateY(-2px);
}
```

#### **Contextual CTAs**
```css
.cta-contextual {
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-indigo);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-lg);
  transition: all 0.2s ease;
}

.cta-contextual:hover {
  background: rgba(99, 102, 241, 0.2);
  transform: translateY(-1px);
}
```

### **Progress Indicator Design**
```css
.progress-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.progress-step.active {
  opacity: 1;
}

.progress-step.completed {
  opacity: 0.8;
}

.step-circle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.1);
  border: 2px solid rgba(99, 102, 241, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: all 0.3s ease;
}

.progress-step.active .step-circle {
  background: var(--gradient-primary);
  border-color: var(--primary-indigo);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
}

.progress-step.completed .step-circle {
  background: var(--text-success);
  border-color: var(--text-success);
}

.step-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-align: center;
}

.progress-step.active .step-label {
  color: var(--text-primary);
  font-weight: 600;
}
```

---

## 6. Social Proof & Trust Elements

### **Statistics Section Design**
```css
.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 4rem 0;
  background: rgba(99, 102, 241, 0.05);
  border-radius: var(--radius-2xl);
  margin: 4rem 0;
}

.stat-item {
  text-align: center;
  padding: 2rem;
}

.stat-value {
  font-size: 3rem;
  font-weight: 800;
  background: var(--gradient-primary);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 1.125rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.stat-item:hover .stat-value {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
```

### **Testimonial Design**
```css
.testimonial-card {
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: var(--radius-xl);
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: var(--shadow-lg);
}

.testimonial-content {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 2rem;
}

.testimonial-content::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -0.5rem;
  font-size: 4rem;
  color: var(--primary-indigo);
  opacity: 0.3;
  font-family: Georgia, serif;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
}

.author-info {
  flex: 1;
}

.author-name {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.author-role {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.testimonial-rating {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.rating-star {
  color: #fbbf24;
  font-size: 1.25rem;
}
```

### **Trust Badges Design**
```css
.trust-badges {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 0;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.trust-badge:hover {
  opacity: 1;
}

.badge-icon {
  width: 2rem;
  height: 2rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-indigo);
}

.badge-text {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}
```

---

## 7. Interactive Elements & Animations

### **Scroll Animations**
```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

.scroll-reveal-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-reveal-left.revealed {
  opacity: 1;
  transform: translateX(0);
}

.scroll-reveal-right {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-reveal-right.revealed {
  opacity: 1;
  transform: translateX(0);
}
```

### **Hover Effects**
```css
.hover-lift {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-8px);
}

.hover-glow {
  transition: all 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
}

.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

### **Loading Animations**
```css
.loading-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid rgba(99, 102, 241, 0.2);
  border-top: 3px solid var(--primary-indigo);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### **Micro-interactions**
```css
.button-press {
  transition: transform 0.1s ease;
}

.button-press:active {
  transform: scale(0.98);
}

.card-tilt {
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
}

.card-tilt:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
}

.link-underline {
  position: relative;
  text-decoration: none;
  color: var(--primary-indigo);
}

.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-indigo);
  transition: width 0.3s ease;
}

.link-underline:hover::after {
  width: 100%;
}
```

---

## 8. Responsive Design Specifications

### **Breakpoint System**
```css
/* Breakpoint Definitions */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large desktops */
```

### **Mobile Design (320px - 768px)**
```css
@media (max-width: 768px) {
  /* Navigation */
  .nav-desktop { display: none; }
  .nav-mobile { display: flex; }
  
  /* Hero Section */
  .hero-container {
    padding: 2rem 1rem;
    text-align: center;
  }
  
  .hero-headline {
    font-size: clamp(1.75rem, 8vw, 2.5rem);
    line-height: 1.2;
  }
  
  .hero-subheadline {
    font-size: 1rem;
    padding: 0 1rem;
  }
  
  /* Feature Grid */
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
  
  /* Stats */
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 2rem 1rem;
  }
  
  .stat-value {
    font-size: 2rem;
  }
  
  /* Testimonials */
  .testimonial-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  /* CTAs */
  .cta-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    max-width: 300px;
  }
}
```

### **Tablet Design (768px - 1024px)**
```css
@media (min-width: 768px) and (max-width: 1024px) {
  /* Hero Section */
  .hero-container {
    padding: 3rem 2rem;
  }
  
  .hero-headline {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }
  
  /* Feature Grid */
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  /* Stats */
  .stats-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  
  /* Testimonials */
  .testimonial-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}
```

### **Desktop Design (1024px+)**
```css
@media (min-width: 1024px) {
  /* Hero Section */
  .hero-container {
    padding: 4rem 2rem;
  }
  
  .hero-headline {
    font-size: clamp(3rem, 5vw, 6rem);
  }
  
  /* Feature Grid */
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  /* Stats */
  .stats-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
  
  /* Testimonials */
  .testimonial-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
```

### **Large Desktop Design (1280px+)**
```css
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .hero-headline {
    font-size: clamp(3.5rem, 4vw, 7rem);
  }
  
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}
```

---

## 9. Accessibility & Performance

### **Accessibility Guidelines**

#### **Semantic HTML**
```html
<!-- Proper heading hierarchy -->
<h1>Main heading</h1>
<h2>Section heading</h2>
<h3>Subsection heading</h3>

<!-- Semantic landmarks -->
<header role="banner">
<nav role="navigation">
<main role="main">
<section aria-labelledby="section-heading">
<h2 id="section-heading">Section Title</h2>
<footer role="contentinfo">
```

#### **ARIA Labels**
```html
<!-- Button with aria-label -->
<button aria-label="Get started with Career AI">
  Get Started
</button>

<!-- Interactive elements -->
<div role="button" tabindex="0" aria-label="Learn more about AI features">
  Learn More
</div>

<!-- Form elements -->
<label for="email">Email address</label>
<input type="email" id="email" required aria-describedby="email-help">
<div id="email-help">We'll never share your email</div>
```

#### **Keyboard Navigation**
```css
/* Focus styles */
.focus-visible {
  outline: 2px solid var(--primary-indigo);
  outline-offset: 2px;
}

/* Skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-indigo);
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 6px;
}
```

#### **Color Contrast**
```css
/* Ensure WCAG AA compliance (4.5:1 ratio) */
.text-primary {
  color: #f1f5f9; /* 15.8:1 ratio against #0f172a */
}

.text-secondary {
  color: #94a3b8; /* 7.1:1 ratio against #0f172a */
}

.text-accent {
  color: #60a5fa; /* 4.7:1 ratio against #0f172a */
}
```

### **Performance Optimization**

#### **Image Optimization**
```css
/* Responsive images */
.hero-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  loading: lazy;
}

/* WebP format support */
.hero-image {
  background-image: url('hero-image.webp');
  background-image: url('hero-image.jpg');
}
```

#### **CSS Optimization**
```css
/* Critical CSS inline */
.critical-css {
  /* Above-the-fold styles */
}

/* Non-critical CSS loaded asynchronously */
.non-critical-css {
  /* Below-the-fold styles */
}
```

#### **Animation Performance**
```css
/* Use transform and opacity for animations */
.smooth-animation {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Avoid animating layout properties */
.avoid-animation {
  /* Don't animate width, height, margin, padding */
}
```

---

## 10. Implementation Guidelines

### **Component Structure**
```jsx
// Homepage Component Structure
const Homepage = () => {
  return (
    <div className="homepage">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};
```

### **CSS Architecture**
```css
/* CSS Custom Properties (Variables) */
:root {
  /* Design tokens */
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
  --color-accent: #06b6d4;
  
  /* Spacing scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* Component-based CSS */
.hero-section { /* Hero styles */ }
.feature-card { /* Feature card styles */ }
.cta-button { /* CTA button styles */ }
```

### **JavaScript Interactions**
```javascript
// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

// Apply to elements
document.querySelectorAll('.scroll-reveal').forEach(el => {
  observer.observe(el);
});
```

### **Performance Monitoring**
```javascript
// Core Web Vitals monitoring
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### **Testing Guidelines**
```css
/* Visual regression testing */
.test-hero {
  /* Test hero section appearance */
}

.test-responsive {
  /* Test responsive breakpoints */
}

.test-accessibility {
  /* Test accessibility features */
}
```

---

## Design Implementation Checklist

### **Phase 1: Foundation**
- [ ] Set up design system (colors, typography, spacing)
- [ ] Implement responsive grid system
- [ ] Create base component styles
- [ ] Set up CSS custom properties

### **Phase 2: Hero Section**
- [ ] Implement hero layout and typography
- [ ] Add animated background effects
- [ ] Create CTA buttons with hover states
- [ ] Implement responsive hero design

### **Phase 3: Feature Showcase**
- [ ] Design feature card components
- [ ] Implement feature grid layout
- [ ] Add hover animations and interactions
- [ ] Create responsive feature sections

### **Phase 4: Trust Elements**
- [ ] Implement statistics section
- [ ] Design testimonial cards
- [ ] Add trust badges
- [ ] Create social proof elements

### **Phase 5: Interactions & Polish**
- [ ] Add scroll animations
- [ ] Implement micro-interactions
- [ ] Optimize performance
- [ ] Test accessibility compliance

### **Phase 6: Testing & Launch**
- [ ] Cross-browser testing
- [ ] Responsive testing
- [ ] Performance optimization
- [ ] Accessibility audit

---

**Document Created**: April 20, 2026
**Design System**: Modern, Accessible, Performance-Optimized
**Target Audience**: Students, Career Counselors, University Administrators
**Next Steps**: Implementation Phase 1 - Foundation Setup
