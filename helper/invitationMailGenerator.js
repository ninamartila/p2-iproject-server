function invitationMailGenerator(sender, tourData) {
  return `
  <p>Hi there,
  <br>
  <br>you're invited to join our new trip named
  <strong>${tourData.name}&nbsp;</strong>Tour, with the following details :
  </p>
  <table style="border-collapse: collapse; width: 68.6944%; height: 45px;" border="1">
    <tbody>
      <tr style="height: 17px;">
        <td style="width: 15.7738%; height: 17px;">
          <strong>place name</strong>
        </td>
        <td style="width: 53.125%; height: 17px;">${tourData.placeName}</td>
      </tr>
      <tr style="height: 17px;">
        <td style="width: 15.7738%; height: 17px;">
          <strong>address</strong>
        </td>
        <td style="width: 53.125%; height: 17px;">${tourData.placeAddress}</td>
      </tr>
      <tr style="height: 17px;">
        <td style="width: 15.7738%; height: 17px;">
          <strong>start date</strong>
        </td>
        <td style="width: 53.125%; height: 17px;">${tourData.planDate}</td>
      </tr>
      <tr style="height: 17px;">
        <td style="width: 15.7738%; height: 17px;">
          <strong>end date</strong>
        </td>
        <td style="width: 53.125%; height: 17px;">${tourData.endDate}</td>
      </tr>
      <tr style="height: 17px;">
        <td style="width: 15.7738%; height: 17px;">
          <strong>end date</strong>
        </td>
        <td style="width: 53.125%; height: 17px;">${
          tourData.price
            ? Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(tourData.price)
            : "FREE"
        }</td>
      </tr>
    </tbody>
  </table>
  <p>You can confirm your presence by check tour-scheduler apps by click this 
    <a href="localhost:3000" target="_blank" rel="noopener" title="link">link</a>
  </p>
  <p>Hope you'll join us, thankyou!</p>
`;
}

module.exports = invitationMailGenerator;
