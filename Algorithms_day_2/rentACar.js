const driver={
  driverLicense:"B",
  licenseIssued: 2018,
  numberOfAccident:1,
  bonus:7
};



function canRentACar(driver){
  console.log(driver);

  const annee = (new Date()).getFullYear();

  if ((driver.driverLicense === "B") && (driver.licenseIssued <= annee-2) && (driver.numberOfAccident===0 || driver.bonus >= 7)){

    return true;

  }else {

    return false;

  }

}

const yesOrNo = canRentACar(driver);

console.log (`${yesOrNo} for Rent a Car !`);
