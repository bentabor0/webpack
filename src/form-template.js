class FormTemplate extends HTMLElement {

    set form(form) {
        this.innerHTML = `        
        <div class="card-form">
            <form class="zoo-form" id="zoo-form">
                <div class="zoo-form-title">${form.title}</div>
                <div class="zoo-form-body">
                ${form.rows}
                </div>
                <div class="rule"></div>
                ${form.footer}
        </div>`
    }

}

customElements.define('form-template', FormTemplate);