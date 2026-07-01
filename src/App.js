import './App.css';
import { useState } from 'react';


function App() {
  const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const date = today.toISOString().split("T")[0];
  const day = days[today.getDay()];
  const[morr, setMorr] = useState('');
  const[mintop, setMintop] = useState('');
  const[gym, setGym] = useState('');
  const[headbath, setHeadbath] = useState('');
  const[eyepatches, setEyepatches] = useState('');
  const[facewash, setFacewash] = useState('');
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    switch(e.target.name) {
      case 'morr':
        setMorr(e.target.value);
        break;
      case 'mintop':
        setMintop(e.target.value);
        break;
      case 'gym':
        setGym(e.target.value);
        break;
      case 'headbath':
        setHeadbath(e.target.value);
        break;
      case 'eyepatches':
        setEyepatches(e.target.value);
        break;
      case 'facewash':
        setFacewash(e.target.value);
        break;
      default:
        break;
    }
  }
  if (!localStorage.getItem("morr")) {
    localStorage.setItem("morr", JSON.stringify([]));
  }
  if (!localStorage.getItem("mintop")) {
    localStorage.setItem("mintop", JSON.stringify([]));
  }
  if (!localStorage.getItem("gym")) {
    localStorage.setItem("gym", JSON.stringify([]));
  }
  if (!localStorage.getItem("headbath")) {
    localStorage.setItem("headbath", JSON.stringify([]));
  }
  if (!localStorage.getItem("eyepatches")) {
    localStorage.setItem("eyepatches", JSON.stringify([]));
  }
  if (!localStorage.getItem("facewash")) {
    localStorage.setItem("facewash", JSON.stringify([]));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const morrData = JSON.parse(localStorage.getItem('morr'));
    if (morr === '') {
      setMorr('1');
    }
    morrData.push(parseInt(morr));
    setMorr('');
    localStorage.setItem('morr', JSON.stringify(morrData));
    const mintopData = JSON.parse(localStorage.getItem('mintop'));
    if (mintop === '') {
      setMintop('1');
    }
    mintopData.push(parseInt(mintop));
    setMintop('');
    localStorage.setItem('mintop', JSON.stringify(mintopData));
    const gymData = JSON.parse(localStorage.getItem('gym'));
    if (gym === '') {
      setGym('1');
    }
    gymData.push(parseInt(gym));
    setGym('');
    localStorage.setItem('gym', JSON.stringify(gymData));
    const headbathData = JSON.parse(localStorage.getItem('headbath'));
    if (headbath === '') {
      setHeadbath('1');
    }
    headbathData.push(parseInt(headbath));
    setHeadbath('');
    localStorage.setItem('headbath', JSON.stringify(headbathData));
    const eyepatchesData = JSON.parse(localStorage.getItem('eyepatches'));
    if (eyepatches === '') {
      setEyepatches('1');
    }
    eyepatchesData.push(parseInt(eyepatches));
    setEyepatches('');
    localStorage.setItem('eyepatches', JSON.stringify(eyepatchesData));
    const facewashData = JSON.parse(localStorage.getItem('facewash'));
    facewashData.push(parseInt(facewash));
    setFacewash('');
    localStorage.setItem('facewash', JSON.stringify(facewashData));
  }
  return (
    <div className="App">
      <h1>Daily Tracking of Health Metrics</h1>
      <section className="status">
        <div className="status-item"></div>
        <div className="status-item"></div>
        <div className="status-item"></div>
        <div className="status-item"></div>
        <div className="status-item"></div>
        <div className="status-item"></div>
      </section>
      <section className="Daywise">
        <h3>{date} - {day}</h3>
        <form>
          { day !== 'Monday' && (
          <>
            <div>
              <h4>Did you apply Morr F 5% before bedtime? </h4>
              <input type="radio" id="yes" name="morr" value='1' checked={morr === "1"} required onChange={handleChange} />
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="no" name="morr" value='0' checked={morr === "0"} required onChange={handleChange} />
              <label htmlFor="no">No</label>
            </div>
            <div>
              <h4>Did you apply mintop after wake up? </h4>
              <input type="radio" id="yes" name="mintop" value='1' checked={mintop === "1"} required onChange={handleChange} />
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="no" name="mintop" value='0' checked={mintop === "0"} required onChange={handleChange} />
              <label htmlFor="no">No</label>
            </div>
            <div>
              <h4>have you went for gym today? </h4>
              <input type="radio" id="yes" name="gym" value='1' checked={gym === "1"} required onChange={handleChange} />
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="no" name="gym" value='0' checked={gym === "0"} required onChange={handleChange} />
              <label htmlFor="no">No</label>
            </div>
          </>
          )}
          { (day === 'Wednesday' || day === 'Saturday') && (
            <div>
            <h4>have you done headbath today? </h4>
            <input type="radio" id="yes" name="headbath" value='1' checked={headbath === "1"} required onChange={handleChange} />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="headbath" value='0' checked={headbath === "0"} required onChange={handleChange} />
            <label htmlFor="no">No</label>
          </div>
          )}
          { (day === 'Tuesday' || day === 'Saturday' || day === 'Thursday') && (
            <div>
              <h4>did you apply eyepatches today? </h4>
              <input type="radio" id="yes" name="eyepatches" value='1' checked={eyepatches === "1"} required onChange={handleChange} />
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="no" name="eyepatches" value='0' checked={eyepatches === "0"} required onChange={handleChange} />
              <label htmlFor="no">No</label>
            </div>
          )}
          <div>
            <h4>Did you wash your face twice today? </h4>
            <input type="radio" id="yes" name="facewash" value='2' checked={facewash === "2"} required onChange={handleChange} />
            <label htmlFor="yes">Yes twice this day</label>
            <input type="radio" id="no" name="facewash" value='1' checked={facewash === "1"} required onChange={handleChange} />
            <label htmlFor="no">No once in this day</label>
            <input type="radio" id="no" name="facewash" value='0' checked={facewash === "0"} required onChange={handleChange} />
            <label htmlFor="no">No not once in this day</label>
          </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
