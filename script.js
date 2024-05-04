function StyleType(a) {
  document.getElementById('StyleBA').innerHTML = a;
}

function StyleHref(a) {
  document.getElementById('StyleBA').href = a;
}

function StyleFontSize(a) {
  document.getElementById('StyleB').style.fontSize = a + 'px';
}

function StylePaddingS(a) {
  document.getElementById('StyleB').style.paddingLeft = a + 'px';
  document.getElementById('StyleB').style.paddingRight = a + 'px';
}

function StylePaddingT(a) {
  document.getElementById('StyleB').style.paddingTop = a + 'px';
  document.getElementById('StyleB').style.paddingBottom = a + 'px';
}

function StyleBorderR(a) {
  document.getElementById('StyleB').style.borderRadius = a + '%';
}

function StyleBorderS(a) {
  document.getElementById('StyleB').style.borderWidth = a + 'px';
}

function StyleBackground(a) {
  document.getElementById('StyleB').style.backgroundColor = a;
}

function StyleBorderC(a) {
  document.getElementById('StyleB').style.borderColor = a;
}

function StyleColor(a) {
  document.getElementById('StyleB').style.color = a;
}

function StyleGenerate() {
  document.getElementById('StyleG').value = document.getElementById('StyleD').innerHTML;
}