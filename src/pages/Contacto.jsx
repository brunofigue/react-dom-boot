import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Aquí puedes implementar el envío del formulario, por ejemplo, con EmailJS o un backend propio.
  };

  return (
    <div style={{ minHeight: "calc(100vh - 100px)" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nombre:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor='message'>Mensaje:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
