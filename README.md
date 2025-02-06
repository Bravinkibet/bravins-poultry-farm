## Bravin's Poultry Farm
Tagline: Healthy Chickens, Delicious Eggs – Straight from the Farm!

Bravin's Poultry Farm is a full-stack web application designed to help customers easily browse, order, and receive products like fully grown chickens, chicks of different ages, and fresh eggs. The app is built using React for the front-end, and Flask for the back-end, ensuring a seamless and user-friendly experience.

## Table of Contents
Overview
Features
Tech Stack
Installation
Usage
Project Structure
Contributing
License

## Overview
The Poultry Farm Web Application allows customers to:

View products (chickens, chicks, eggs)
Order products with delivery options
Get medication routines for chicks
Access a blog with poultry care tips
Register and login to manage orders
Secure payment options like M-Pesa or Cash on Delivery
This app is built with a React Front-End and a Flask Back-End, designed to handle 1,000+ users.

## Features
Responsive UI: Clean, modern interface with responsive components using TailwindCSS.
Product Pages: Display eggs, chicks, and fully grown chickens with easy navigation.
Order System: A fully functioning order system where users can place orders after signing up and receiving a medication routine for chicks.
Admin Panel: Admins can manage products and orders through a secure interface.
Payment Options: Payment can be made via Mpesa or Cash on Delivery.
Contact & Support: Contact information for customers and a blog for tips on poultry care.
Fast Delivery: Delivery is made within 2 days or less.
## Tech Stack
## Front-End:
React
TailwindCSS (for styling)
React Router (for navigation)
## Back-End:
Flask (Python)
JWT/Firebase Authentication
PostgreSQL / MySQL (for database)
Heroku (for deployment)
## Other Tools:
Docker (for containerization)
AWS (for hosting and cloud storage)
Git (version control)
# Installation
Follow these steps to get the project up and running on your local machine.

## 1. Clone the repository:
   
git clone https://github.com/Bravinkibet/Poultry-Farm.git
cd Poultry-Farm
## 2. Install dependencies for the back-end (Flask):
In the Poultry-Farm folder, navigate to the back-end folder.

cd backend
pip install -r requirements.txt
## 3. Set up the database:
Configure PostgreSQL or MySQL and add your credentials to the environment variables.

## 4. Install dependencies for the front-end (React):
Navigate to the front-end folder.

cd frontend
npm install
## 5. Run the application:
## To run the Flask back-end:

cd backend
python app.py
## To run the React front-end:

cd frontend
npm start
Visit http://localhost:3000 to view the app.

## Usage
Once the application is running:

Navigate to the homepage.
Browse products (chickens, chicks, eggs).
Register an account or log in.
Add products to the cart and place an order.
Choose delivery method and payment option (Mpesa / Cash on Delivery).
Admins can manage orders and products via the admin panel.
## Project Structure
Poultry-Farm/
│
├── backend/                    # Flask back-end
│   ├── app.py                  # Main Flask app
│   ├── models.py               # Database models
│   ├── routes/                 # API routes
│   ├── config.py               # Configuration settings
│   ├── requirements.txt        # Python dependencies
│
├── frontend/                   # React front-end
│   ├── public/                 # Public assets (index.html, etc.)
│   ├── src/                    # Source files
│   │   ├── components/         # UI components (Navbar, Footer, etc.)
│   │   ├── pages/              # Pages (Home, Login, Products, etc.)
│   │   ├── App.js              # Main React component
│   │   ├── index.js            # React entry point
│   │   ├── styles/             # CSS files
│   │   └── utils/              # Helper functions
│   └── package.json            # NPM dependencies
│
├── .gitignore                  # Git ignore file
├── README.md                   # Project documentation
└── LICENSE                     # License file
## Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.
##  License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any inquiries or feedback, feel free to contact us at:
Phone: 0741937056
Email: bravink599@gmail.com

