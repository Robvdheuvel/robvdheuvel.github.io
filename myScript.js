
function toggle_list(number) {
  const chevron_down = "pathways_chev_down" + number;
  const chevron_up = "pathways_chev_up" + number;
  const response = "response_" + number;
  const image = "pathways_list_img" + number;

  if (document.getElementById(chevron_down).style.display === "none") {
    document.getElementById(chevron_down).style.display = "block";
    document.getElementById(chevron_up).style.display = "none";
    document.getElementById(response).style.display = "none";
    document.getElementById(image).style.display = "none";

  } else {
    document.getElementById(chevron_down).style.display = "none";
    document.getElementById(chevron_up).style.display = "block";
    document.getElementById(response).style.display = "block";
    document.getElementById(image).style.display = "block";
  }


}
