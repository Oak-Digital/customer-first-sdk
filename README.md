# CustomerFirst SDK

This SDK provides a convenient way to interact with the CustomerFirst API in JavaScript and TypeScript applications.

## Installation

Install the package using npm:

```bash
npm install customer-first-sdk
```

Or using yarn:

```bash
yarn add customer-first-sdk
```

## Usage

First, import the SDK in your project:

```javascript
import CustomerFirstAPI from "customer-first-sdk";
```

Then, initialize the API with your credentials:

```javascript
const api = new CustomerFirstAPI("your-api-key", "https://api.base.url");
```

Now you can use the various services provided by the SDK:

```javascript
// Example: Get a list of customers
const customers = await api.customers.getCustomers();

// Example: Create a new ticket
const newTicket = await api.tickets.createTicket({
  customerid: customer.content.id || 0, // Get the customer ID from the previous step
  assignee: 18400,
  workload: 1,
  storeid: 5737,
  status: TicketStatus.New,
  type: TicketType.Sale,
});
```

## Available Services

The SDK provides the following services:

- `customers`: Manage customer information
- `tickets`: Handle support tickets
- `products`: Manage product data
- `settings`: Configure API settings
- `users`: Manage user accounts
- `ticket tags`: Manage ticket tags

Each service provides methods for interacting with the corresponding API endpoints. Refer to the API documentation for detailed information on available methods and their parameters.

## TypeScript Support

This SDK is written in TypeScript and provides type definitions out of the box. You can enjoy full IntelliSense and type checking in TypeScript projects.

## Error Handling

The SDK uses Promise-based error handling. Wrap your API calls in try-catch blocks to handle any errors:

```javascript
try {
  const result = await api.customers.getCustomer("non-existent-id");
} catch (error) {
  console.error("An error occurred:", error.message);
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
