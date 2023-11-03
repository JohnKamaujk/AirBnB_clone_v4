/* eslint-env jquery */ // => (we are using jQuery)
/* Adding a listener that adds/removes amenities in an object */

$(document).ready(function () {
  const amenityObj = {};

  $(".amenities .popover input").change(function () {
    const amenityId = $(this).attr("data-id");
    const amenityName = $(this).attr("data-name");

    if ($(this).is(":checked")) {
      amenityObj[amenityId] = amenityName;
    } else {
      delete amenityObj[amenityId];
    }
    const selectedAmenities = Object.values(amenityObj).sort().join(", ");
    $(".amenities h4").text(selectedAmenities);
  });

$.ajax({
  url: "http://0.0.0.0:5001/api/v1/status/",
  type: "GET",
  success: function (data) {
    // Check if the status is "OK"
    if (data.status === "OK") {
      // If the status is "OK," add the "available" class to the div#api_status
      $("#api_status").addClass("available");
    } else {
      // If the status is not "OK," remove the "available" class from the div#api_status
      $("#api_status").removeClass("available");
    }
  },
  error: function () {
    // Handle any errors that occur during the request, e.g., network issues.
    console.log("Error: Unable to fetch API status");
  },
});
});
