<template>
  <div class="lightbox" :class="{ open: modalStatus }">
    <div class="modal-mask" @click.self="changeModalStatus('close')">
      <div class="modal-container">
        <div class="modal-body">
          <i
            class="fas fa-times modal-close"
            @click.self="changeModalStatus('close')"
          ></i>
          <header>
            <slot name="header">Default Header</slot>
            <!-- <h2>Default Header</h2> -->
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
    new: {
      type: Boolean,
    },
    del: {
      type: Boolean,
    },
    // lightboxStatus: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  // emits: ["triggerBack"],
  setup(props, context) {
    // const triggerBack = () => {
    //   context.emit("triggerBack");
    // };
    // return {
    //   props,
    //   triggerBack,
    // };
  },
};
</script>

<style></style>
