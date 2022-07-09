import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
  // ######### CARA 1: MAPPING DI LUAR RETURN COMPONEN #######
  // const dataContacts = contacts.map((data) => {
  //   return (
  //     <Contact
  //       key={data.key}
  //       name={data.name}
  //       phone={data.phone}
  //       email={data.email}
  //       photo={data.photo}
  //     />
  //   );
  // });
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      {/* ######### CARA 2: MAPPING DI DALAM RETURN COMPONEN #######
      {contacts.map((data) => {
        return (
          <Contact
            key={data.key}
            name={data.name}
            phone={data.phone}
            email={data.email}
            photo={data.photo}
          />
        );
      })} */}
      <div className="master-card">
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
        <Contact data={contacts[3]} />
        <Contact data={contacts[4]} />
        <Contact data={contacts[5]} />;
      </div>
    </div>
  );
};

export default App;
