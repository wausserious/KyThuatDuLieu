// src/PersonalInformationPage.js
import React, { useState } from 'react';
import './PersonalInformation.css';

const PersonalInformationPage = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  const handleSearchByName = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/name/${name}`);
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error('Error fetching user details by name:', error);
    }
  };

  const handleSearchByCardNumber = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/card/${cardNumber}`);
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error('Error fetching user details by card number:', error);
    }
  };

  return (
    <div className="personal-info">
      <h2>Personal Information</h2>
      <div className="search-container">
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSearchByName}>
            <i className="fas fa-search"></i> Search
          </button>
        </div>
        <div className="input-group">
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <button onClick={handleSearchByCardNumber}>
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>
      <div className="info-container">
        <div className="personal-details">
          <h3>Personal Details</h3>
          {userDetails ? (
            <>
              <div className="detail-group">
                <label>Name:</label>
                <p>{userDetails.name}</p>
              </div>
              <div className="detail-group">
                <label>Gender:</label>
                <p>{userDetails.gender}</p>
              </div>
              <div className="detail-group">
                <label>Date of birth:</label>
                <p>{userDetails.dateOfBirth}</p>
              </div>
              <div className="detail-group">
                <label>Age:</label>
                <p>{userDetails.age}</p>
              </div>
              <div className="detail-group">
                <label>Address:</label>
                <p>{userDetails.address}</p>
              </div>
              <div className="detail-group">
                <label>Number of cards:</label>
                <p>{userDetails.cards.length}</p>
              </div>
            </>
          ) : (
            <>
              <div className="detail-group">
                <label>Name:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Gender:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Date of birth:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Age:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Address:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Number of cards:</label>
                <p></p>
              </div>
            </>
          )}
        </div>
        <div className="card-list">
          <h3>Card List</h3>
          {userDetails && userDetails.cards ? (
            userDetails.cards.map((card, index) => (
              <div key={index} className="card-item">
                <h4>Card {index + 1}</h4>
                <div className="detail-group">
                  <label>Card number:</label>
                  <p>{card.cardNumber}</p>
                </div>
                <div className="detail-group">
                  <label>Card type:</label>
                  <p>{card.cardType}</p>
                </div>
                <div className="detail-group">
                  <label>Open date:</label>
                  <p>{card.openDate}</p>
                </div>
                <div className="detail-group">
                  <label>Expired date:</label>
                  <p>{card.expiredDate}</p>
                </div>
                <div className="detail-group">
                  <label>CVV:</label>
                  <p>{card.cvv}</p>
                </div>
                <div className="detail-group">
                  <label>Has chip:</label>
                  <p>{card.hasChip ? 'Yes' : 'No'}</p>
                </div>
                <div className="detail-group">
                  <label>Current Credit Limit:</label>
                  <p>{card.currentCreditLimit}</p>
                </div>
                <div className="detail-group">
                  <label>Last pin change:</label>
                  <p>{card.lastPinChange}</p>
                </div>
                <div className="detail-group">
                  <label>Card on dark web:</label>
                  <p>{card.cardOnDarkWeb ? 'Yes' : 'No'}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="card-item empty">
              <div className="detail-group">
                <label>Card number:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Card type:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Open date:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Expired date:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>CVV:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Has chip:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Current Credit Limit:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Last pin change:</label>
                <p></p>
              </div>
              <div className="detail-group">
                <label>Card on dark web:</label>
                <p></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationPage;
