var data = fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    Object.keys(data).map((item, index) => {
      let rightSideItem = document.createElement("div");
      rightSideItem.className = "right-side-item";
      rightSideItem.classList.add(`background-item-${index + 1}`);
      let rsItem = document.createElement("div");
      rsItem.classList.add("rs-item");
      let icon = document.createElement("div");
      icon.classList.add("icon");
      let img = document.createElement("img");
      img.setAttribute("src", data[item].icon);
      img.setAttribute("alt", "");
      icon.appendChild(img);
      let color = document.createElement("div");
      color.style.color = data[item].color;
      color.innerHTML = data[item].category;
      rsItem.appendChild(icon);
      rsItem.appendChild(color);
      let flex = document.createElement("div");
      flex.classList.add("flex");
      let colorHundred = document.createElement("div");
      colorHundred.classList.add("color-hundred");
      colorHundred.innerHTML = "/ 100";
      let number = document.createElement("div");
      number.innerHTML = data[item].score + "&nbsp;";
      flex.appendChild(number);
      flex.appendChild(colorHundred);
      rightSideItem.appendChild(rsItem);
      rightSideItem.appendChild(flex);
      document.querySelector(".right-side").appendChild(rightSideItem);
    });
  });
