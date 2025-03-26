import React from 'react';
import './Sample.css'; 
import hoddie1 from '../../images/hoddie1.png'
import hoddie2 from '../../images/hoddie2.jpg'
import hoddie3 from '../../images/hoddie3.jpg'
import hoddie4 from '../../images/hoddie4.jpg'

const Sample = () => {
  return (
    <div className="sample-container">
    <h1 className="sample-emoji">🎈🎈🎈</h1> 
      <h1 className="sample-title">Hoddies</h1>
      <h1 className="sample-title">For</h1>
      <h1 className="sample-title">Summer</h1>
      <img className="center-img" src={hoddie1} alt=""/>
      <div className="hoddies">
  <div className="hoddie-item">
    <img src={hoddie2} alt="" />
    <div className="vertical-line"></div>
    <div className="hoddie-details">
      <h5>Nice hoddie</h5>
      <p>1000 birr</p>
      <button>Add to Cart</button>
    </div>
  </div>
  <div className="hoddie-item">
    <img src={hoddie3} alt="" />
    <div className="vertical-line"></div>
    <div className="hoddie-details">
      <h5>Best hoddie</h5>
      <p>1400 birr</p>
      <button>Add to Cart</button>
    </div>
  </div>
  <div className="hoddie-item">
    <img src={hoddie4} alt="" />
    <div className="vertical-line"></div>
    <div className="hoddie-details">
      <h5>Unique hoddie</h5>
      <p>1300 birr</p>
      <button>Add to Cart</button>
    </div>
  </div>
</div>

      <div className="pink-div">
        <h1 className="hoddie title1">Girls</h1>
        <h1 className="hoddie title2">summer hoddie</h1>
        <h3 className="price">900 birr</h3>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Sample;
