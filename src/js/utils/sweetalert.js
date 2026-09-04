import Swal from 'sweetalert2';

function showAlert(text,icon,confirmButtonText){
 	return Swal.fire({
		text,
		icon,
		confirmButtonText
	})
}
export {showAlert}