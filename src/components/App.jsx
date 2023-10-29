import React, { useState } from 'react'; // Import React and useState hook from the 'react' library.
import ContactForm from './ContactForm/ContactForm'; // Import the ContactForm component from a specific path.
import ContactList from './ContactList/ContactList'; // Import the ContactList component from a specific path.
import Filter from './Filter/Filter'; // Import the Filter component from a specific path.

const App = () => {
  const [contacts, setContacts] = useState([
    // Initialize the 'contacts' state using the useState hook.
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }, // Initial contact data.
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState(''); // Initialize the 'filter' state using the useState hook.

  const [name, setName] = useState(''); // Initialize the 'name' state using the useState hook.
  const [number, setNumber] = useState(''); // Initialize the 'number' state using the useState hook.

  const handleFilterChange = event => {
    // Define a function to handle changes in the 'filter' input.
    setFilter(event.target.value); // Update the 'filter' state with the new value.
  };

  const handleChange = event => {
    // Define a function to handle changes in the 'name' and 'number' inputs.
    if (event.target.name === 'name') {
      // Check if the input's name attribute is 'name'.
      setName(event.target.value); // Update the 'name' state with the new value.
    } else if (event.target.name === 'number') {
      // Check if the input's name attribute is 'number'.
      setNumber(event.target.value); // Update the 'number' state with the new value.
    }
  };

  const handleSubmit = event => {
    // Define a function to handle form submissions.
    event.preventDefault(); // Prevent the default form submission behavior.

    if (contacts.some(contact => contact.name === name)) {
      // Check if a contact with the same name already exists.
      alert(`Contact with name "${name}" already exists.`); // Display an alert if a contact with the same name exists.
      return; // Exit the function.
    }

    const newContact = { id: generateId(), name, number }; // Create a new contact object.
    setContacts(prevContacts => [...prevContacts, newContact]); // Add the new contact to the 'contacts' array.
    setName(''); // Clear the 'name' input field.
    setNumber(''); // Clear the 'number' input field.
  };

  const generateId = () => {
    // Define a function to generate a unique ID for contacts.
    return Math.random().toString(36).substr(2, 9); // Generate a unique ID and return it as a string.
  };

  const handleDeleteContact = contactId => {
    // Define a function to handle contact deletion.
    setContacts(
      (
        prevContacts // Update the 'contacts' state by filtering out the contact with the specified ID.
      ) => prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(
    (
      contact // Filter the contacts based on the 'filter' value (case-insensitive).
    ) => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App; // Export the App component as the default export.

// This code is a React application that serves as a simple phonebook manager. It allows users to perform the following actions:

// 1. View a list of contacts.
// 2. Add new contacts with a name and phone number.
// 3. Filter contacts by name.
// 4. Delete existing contacts.

// Here's a summary of the code:

// - It uses React functional components and hooks, such as `useState`, to manage the application's state.
// - The main `App` component maintains the state for contacts, filter text, name input, and number input.
// - Users can input a name and number in the form, submit it to add a new contact, and receive an alert if the contact already exists.
// - Contacts are displayed in a list that can be filtered by name using an input field.
// - The `ContactList` component renders the list of contacts, allowing users to delete individual contacts.
// - A unique ID is generated for each contact using the `generateId` function.
// - The `Filter` component provides the input field for filtering contacts by name.
// - Overall, the code demonstrates how to create a basic CRUD (Create, Read, Update, Delete) application using React hooks and components.
