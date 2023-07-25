function getModels() {
  window.location.href = 'modelEntity.html';
}
function copyToClipboard(){
  const link='https://github.com/VamshiRk27/E-Commerce_BackEnd.git';
  navigator.clipboard.writeText(link)
  .then(function(){
    alert('Link copied to clipboard!');
  })
  .catch(function(error){
    alert.error('Failed to copy link: ',error);
  });
};
