# WeatherApp 🌤️

A beautiful and responsive weather application that provides real-time weather information for any location worldwide. Built with HTML, CSS, and JavaScript, featuring a modern UI with day/night themes that automatically adapt based on the current time.

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **3-Day Forecast**: View weather predictions for the current day and next two days
- **Dynamic UI**: Beautiful day/night themes that automatically switch based on local time
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Carousel**: Smooth navigation between different days using Bootstrap carousel
- **Detailed Weather Info**: 
  - Temperature (current and forecast)
  - Weather conditions with icons
  - Wind speed and direction
  - Precipitation probability
  - Local time and date
- **Search Functionality**: Real-time search with instant weather updates
- **Custom Fonts**: Beautiful typography using custom fonts (Viagram and RIMONS)

## 🚀 Live Demo

Simply open `index.html` in your web browser to start using the application!

## 📁 Project Structure

```
WeatherApp/
├── css/
│   ├── bootstrap.min.css      # Bootstrap framework
│   ├── style.css             # Custom styles
│   └── style.min.css         # Minified custom styles
├── fonts/
│   ├── city-rimons/
│   │   └── RIMONS.ttf        # City name font
│   └── main-viagram/
│       └── Viagram.otf       # Main content font
├── img/
│   ├── dayBgIcon.png         # Day background overlay
│   ├── icon-compass.png      # Wind direction icon
│   ├── icon-umberella.png    # Precipitation icon
│   ├── icon-wind.png         # Wind speed icon
│   ├── icon.png              # App favicon
│   └── nightBgIcon.png       # Night background overlay
├── js/
│   ├── bootstrap.bundle.min.js # Bootstrap JavaScript
│   └── index.js              # Main application logic
└── index.html                # Main HTML file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with CSS variables and gradients
- **JavaScript (ES6+)**: Modern JavaScript with async/await
- **Bootstrap 5**: Responsive framework and carousel component
- **WeatherAPI.com**: External weather data service
- **Custom Fonts**: Viagram and RIMONS for enhanced typography

## 📦 Installation

1. **Clone or Download** the project files to your local machine
2. **Open** `index.html` in your web browser
3. **Start searching** for any city to get weather information

No build process or dependencies installation required!

## 🎯 Usage

1. **Search for a Location**: Type any city name in the search input field
2. **View Current Weather**: The first carousel slide shows current weather conditions
3. **Browse Forecast**: Use the carousel navigation arrows to view 3-day forecast
4. **Enjoy the Experience**: The UI automatically adapts to day/night themes

## 🔧 Configuration

### API Key Setup

The application uses WeatherAPI.com for weather data. To use your own API key:

1. Sign up at [WeatherAPI.com](https://www.weatherapi.com/)
2. Get your API key
3. Replace the API key in `js/index.js`:
   ```javascript
   let apiKey = "YOUR_API_KEY_HERE";
   ```

### Customization

- **Colors**: Modify CSS variables in `css/style.css` to change the color scheme
- **Fonts**: Replace font files in the `fonts/` directory
- **Icons**: Update weather icons by modifying the icon paths in the JavaScript file

## 🌟 Key Features Explained

### Dynamic Theme Switching
The app automatically switches between day and night themes based on the current time at the searched location:
- **Day Theme**: Blue gradient background with lighter overlay
- **Night Theme**: Dark gradient background with night overlay

### Real-time Search
As you type in the search box, the app fetches weather data in real-time using the WeatherAPI.com service.

### Responsive Carousel
Built with Bootstrap 5 carousel component, providing smooth navigation between:
- Current day weather
- Next day forecast
- Day after tomorrow forecast

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for providing weather data
- [Bootstrap](https://getbootstrap.com/) for the responsive framework
- Custom font creators for the beautiful typography

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository.

---

**Enjoy checking the weather! ☀️🌧️❄️** 