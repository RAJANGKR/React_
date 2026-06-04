
const Form1 = () => {

    console.log('Form1 rendered');

    const submitHandler = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        console.log('Name:', name);
        console.log('Email:', email);
    }

  return (
    <div className='form1' style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', borderRadius: '8px', backgroundColor: 'rgb(240, 240, 240)' }}>
      <h2 className="from11">Form 1</h2>
      <form onSubmit={ submitHandler }>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form1;