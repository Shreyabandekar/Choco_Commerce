## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shreyabandekar/Choco_Commerce
   cd choco-commerce
   ```

2. Configure `.env` with your MySQL credentials.

3. Install dependencies:
   ```bash
   npm install
   ```

4. Initialize database:
   ```bash
   mysql -u root -p
   source db/schema.sql
   ```

5. Seed database:
   ```bash
   npm run seed
   ```

6. Run the app:
   ```bash
   npm run develop
   ```

## Features

- Browse chocolate products
- View detailed product pages
- Add/update/delete items in cart
- Checkout via Stripe
- User authentication with JWT
- Responsive frontend with React
- Animations using React Reveal

## Models

- **User**
- **Product**
- **Order**
- **Order_Details**

Relationships:
- One-to-many: `User → Order`
- Many-to-many: `Order ↔ Product` via `Order_Details`

## Libraries & Tools

- **Stripe** – Payment gateway integration
- **React Reveal** – Animations
- **Google Analytics** – User traffic and behavior tracking
- **JWT** – Secure user authentication
- **Sequelize** – ORM for MySQL

## Built With

- JavaScript
- Node.js
- Express.js
- React
- MySQL2
- Sequelize
- Stripe
- JWT
