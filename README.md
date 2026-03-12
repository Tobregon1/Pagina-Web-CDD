# 🏛️ Iglesia Casa de Dios - Ángeles del Puente

<div align="center">
  <table>
    <tr>
      <td align="center" style="border: none;">
         <img src="img/3.png" alt="Logo Casa de Dios" width="180">
      </td>
      <td width="50" style="border: none;"></td>
      <td align="center" style="border: none;">
         <img src="img/4.png" alt="Logo Ángeles del Puente" width="180">
      </td>
    </tr>
  </table>
</div>
Sitio web oficial de la Iglesia Casa de Dios en Corrientes, Argentina. Un espacio digital para conectar con nuestra comunidad, conocer nuestros eventos y mantenerte en contacto con nosotros.

---

## 📋 Descripción

Este es el sitio web de la **Iglesia Casa de Dios - Ángeles del Puente**, una comunidad cristiana ubicada en Corrientes, Argentina. El sitio ofrece información sobre:

- 📅 Próximos eventos y horarios de reuniones
- 👥 Información sobre la iglesia
- 🖼️ Galería de fotos
- 🙏 Formulario de peticiones de oración
- 📞 Información de contacto

---

## ✨ Características

### 🎨 Diseño Moderno
- **Modo Claro/Oscuro**: Alternar entre temas para una mejor experiencia visual
- **Diseño Responsivo**: Optimizado para todos los dispositivos (móviles, tablets y escritorio)
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Tipografía Premium**: Utiliza Google Fonts (Poppins)

### 🚀 Funcionalidades

#### 🏠 Página Principal
- Hero banner con imagen de fondo personalizable
- Enlaces directos a redes sociales (WhatsApp, Instagram, YouTube, Facebook)
- Navegación suave entre secciones

#### 📅 Eventos
Información sobre los eventos semanales:
- **Reuniones Sábados**:
  - Adolescentes: 17:30 HS
  - Solos y Solas: 19:00 HS
  - Matrimonios: 20:30 HS
  - Jóvenes: 22:00 HS
- **Culto General**: 
  - Domingos 19:00 HS

#### 🖼️ Galería
- Carrusel de imágenes con navegación manual y automática
- Transiciones suaves entre imágenes
- Controles intuitivos (anterior/siguiente)

#### 🙏 Peticiones de Oración
- Formulario directo para enviar peticiones vía WhatsApp
- Integración con WhatsApp Business

#### 📧 Contacto
- Información de ubicación, teléfono y redes sociales
- Formulario de contacto que envía mensajes directamente a WhatsApp
- Mapa de ubicación (integrable)

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS y animaciones
- **JavaScript (Vanilla)**: Funcionalidad interactiva sin frameworks
- **Font Awesome 6**: Iconos vectoriales
- **Google Fonts**: Tipografía Poppins

---

## 📁 Estructura del Proyecto

```
PAG Web-CDD/
├── index.html              # Página principal
├── CSS/
│   ├── estilos.css        # Estilos principales
│   └── estilos.css.backup # Respaldo de estilos
├── js/
│   └── main.js            # JavaScript principal
├── img/                   # Imágenes e íconos
│   ├── 3.png          # Logo Casa de Dios
│   ├── 4.png        # Logo Ángeles del Puente
│   ├── CDD_desde.arriba.jpg  # Vista aérea
│   └── ...                # Otras imágenes
└── README.md              # Este archivo
```

---

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code, Sublime Text, etc.) - opcional
- Servidor web local (Live Server, XAMPP, etc.) - opcional

### Instalación

1. **Clona o descarga este repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/pag-web-cdd.git
   ```

2. **Abre el proyecto**:
   - Navega a la carpeta del proyecto
   - Abre `index.html` directamente en tu navegador, o
   - Usa un servidor local para mejor experiencia (recomendado)

### Usando Live Server (VS Code)

1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"
4. El sitio se abrirá automáticamente en `http://localhost:5500`

---

## ⚙️ Configuración

### Personalizar Información de Contacto

Edita el archivo `index.html` para actualizar:

**Teléfono de WhatsApp** (línea 51):
```html
<a href="https://wa.me/5493794018700" target="_blank">
```

**Redes Sociales** (líneas 53-58):
```html
<a href="https://www.instagram.com/casadediosarg/" target="_blank">
<a href="https://www.youtube.com/@GustavoAlmiron/featured" target="_blank">
<a href="https://www.facebook.com/casadedios.ctes" target="_blank">
```

**Dirección** (línea 145):
```html
<span>Av. Raul Alfonsin 4043, Corrientes, Argentina</span>
```

### Personalizar Colores

Edita las variables CSS en `CSS/estilos.css` (primeras líneas):
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... más variables */
}
```

### Agregar Imágenes a la Galería

1. Agrega tus imágenes a la carpeta `img/`
2. Edita `index.html` en la sección de galería (líneas 108-113):
```html
<img src="img/tu-imagen.jpg" alt="Descripción">
```

---

## 📱 Funcionalidades de JavaScript

### main.js incluye:

1. **Toggle de Tema (Claro/Oscuro)**:
   - Guarda preferencia en `localStorage`
   - Cambia ícono dinámicamente

2. **Menú Hamburguesa**:
   - Navegación responsiva para móviles
   - Cierre automático al seleccionar enlace

3. **Carrusel de Imágenes**:
   - Navegación manual (botones)
   - Auto-play cada 5 segundos
   - Transiciones suaves

4. **Header con Scroll**:
   - Cambia estilo al hacer scroll
   - Optimizado con `requestAnimationFrame`

5. **Integración WhatsApp**:
   - Formulario de peticiones de oración
   - Formulario de contacto general
   - Envío directo a WhatsApp

---

## 🎨 Estilos y Diseño

### Características del CSS:

- **Variables CSS**: Sistema de diseño centralizado
- **Flexbox y Grid**: Layouts modernos y responsivos
- **Media Queries**: Adaptación a diferentes tamaños de pantalla
- **Animaciones**: Transiciones suaves y efectos hover
- **Modo Oscuro**: Implementado con variables CSS
- **Glassmorphism**: Efectos de vidrio esmerilado

### Breakpoints Responsivos:

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

---

## 🌐 Redes Sociales

Conecta con nosotros:

- 📱 **WhatsApp**: [+54 9 379 401-8700](https://wa.me/5493794018700)
- 📷 **Instagram**: [@casadediosarg](https://www.instagram.com/casadediosarg/)
- 🎥 **YouTube**: [Gustavo Almiron](https://www.youtube.com/@GustavoAlmiron/featured)
- 👥 **Facebook**: [Casa de Dios Corrientes](https://www.facebook.com/casadedios.ctes)

---

## 📍 Ubicación

**Dirección**: Av. Raul Alfonsin 4043, Corrientes, Argentina

---

## 🤝 Contribuciones

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

---

## 📄 Licencia

© 2025 Iglesia Casa de Dios. Todos los derechos reservados.

---

## 🐛 Reporte de Bugs

Si encuentras algún error o tienes sugerencias, por favor:

1. Abre un issue en GitHub
2. Describe el problema detalladamente
3. Incluye capturas de pantalla si es posible
4. Indica el navegador y sistema operativo usado

---

## ✅ Checklist de Mantenimiento

- [ ] Actualizar imágenes de la galería regularmente
- [ ] Verificar enlaces de redes sociales
- [ ] Actualizar horarios de eventos según necesidad
- [ ] Optimizar imágenes para web (compresión)
- [ ] Realizar pruebas en diferentes navegadores
- [ ] Actualizar información de contacto si cambia

---

## 📞 Soporte

Para soporte técnico o preguntas sobre el sitio web, contacta a través de:

- WhatsApp: +54 9 379 401-8700
- Email: @casadediosarg (Instagram)

---

**¡Que Dios te bendiga! 🙏✨**

---

*Desarrollado con 💙 para la comunidad de Casa de Dios - Ángeles del Puente*
