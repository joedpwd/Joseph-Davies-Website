Vue.component('post-card', {
    template: `
    <div class="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd">
        <div class="content-card card">
            <slot name="post-image"></slot>
            <div class="card-content">
                <slot name="post-title"></slot>
                <p><slot name="post-highlight"></slot></p>
            </div>
        </div>
    </div>
    `
});


new Vue({
    el: '#root',

    data: {
        showNav: false
    }
});