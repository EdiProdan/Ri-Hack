export const getTrashContainers = () => {
   fetch("http://localhost:8080/api/trash-containers", {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin':'*'
            }
          })
        .then(response => response.json())
        .then(json => json)
}