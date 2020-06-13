Vue.component('post-card', {
    template: `
    <div class="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd">
        <div class="card card-container grow">
            <div
            <slot name="post-image"></slot>
            <div class="card-content">
                <slot name="post-title"></slot>
                <div class="card-excerpt"><slot name="post-highlight"></slot></div>
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