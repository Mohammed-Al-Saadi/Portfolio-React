

export default function onButtonClick() {

    fetch('resume_mohammed.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume_mohammed.pdf';
            alink.click();
        })
    })

    return (
        <div>
            <button onClick={onButtonClick}>
                Download PDF
            </button>

        </div>

    )
}
