<template>
  <div class="lightbox" :class="{ open: props.lightboxStatus }">
    <div class="modal-mask" @click.self="triggerBack">
      <div class="modal-container">
        <div class="modal-body">
          <i class="fas fa-times modal-close" @click.self="triggerBack"></i>
          <header>
            <slot name="header">Default Header</slot>
          </header>
          <hr />
          <main>
            <slot name="main">Default Body</slot>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lightboxStatus: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["triggerBack"],
  setup(props, context) {
    const triggerBack = () => {
      context.emit("triggerBack");
    };

    return {
      props,
      triggerBack,
    };
  },
};
</script>

<style></style>
