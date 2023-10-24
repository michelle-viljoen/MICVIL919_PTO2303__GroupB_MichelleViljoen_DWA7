
 // The options or values within the settings form
 const themeChoice = document.querySelector('[data-settings-theme]')


/**
 * Sets the css styling for various theme options available
 * @param {string} themeName 
 * @returns {string}
 */
 function getThemeStyle(themeName) {
  const styles = {
    day: {
      dark: '10, 10, 20',
      light: '255, 255, 255',
    },
    night: {
      dark: '255, 255, 255',
      light: '10, 10, 20',
    },
  };

  return styles[themeName] || styles.day; // Default to 'day' if the theme is not found
}

/**
 * Applies a specified theme to the document 
 * @param {string} theme - the name of the theme to apply
 */
function applyTheme(theme) {
  const themeName = themeChoice.value;
  const style = getThemeStyle(themeName); // Get the style for the selected theme

    document.documentElement.style.setProperty('--color-dark', style.dark);
    document.documentElement.style.setProperty('--color-light', style.light);

      document.querySelector('[data-settings-overlay]').close();
} 


/**
 * 
 * @param {Event} event 
*/
function chooseDarkHandler(event) {
  event.preventDefault();

    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const chooseTheme = darkTheme ? 'night' : 'day';

      applyTheme(chooseTheme); // Applies the selected theme to the document
     }
        export { chooseDarkHandler }
 
    

// MY PREVIOUS ABSTRACTION CODE FOR THIS FUNCTION IN THE BOOK CONNECT APP.    
// // THIS CLASS ALLOWS THE CHANGING OF DISPLAY THEMES TO OCCUR SUCCESSFULLY

// class ThemeHandler {
//     constructor(style, themeChoice, settingsForm) {
//       this.style = style;
//       this.themeChoice = themeChoice;
//       this.settingsForm = settingsForm;
  
//       this.setupInitialTheme();
//       this.attachEventHandlers();
//     }
  
//     setupInitialTheme() {
//       const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       const chooseTheme = darkTheme ? 'night' : 'day';
//       this.applyTheme(chooseTheme);
//     }
  
//     applyTheme(theme) {
//       document.documentElement.style.setProperty('--color-dark', this.style[theme].dark);
//       document.documentElement.style.setProperty('--color-light', this.style[theme].light);
//     }
  
//     handleThemeChange() {
//       const theme = this.themeChoice.value;
//       this.applyTheme(theme);
//       document.querySelector('[data-settings-overlay]').close();
//     }
  
//     attachEventHandlers() {
//       this.settingsForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         this.handleThemeChange();
//       });
//     }
//   }

//   export {ThemeHandler}

