Vue.component('post-card', {
    template: `
    <div class="column is-half-tablet is-one-quarter-desktop">
        <div class="content-card card">
            <slot name="post-image"></slot>
            <div class="card-content">
                <h3 class="is-size-3"><slot name="post-title"></slot></h3>
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