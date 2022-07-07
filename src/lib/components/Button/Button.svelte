<script lang="ts">
  import './button.css';
  import { createEventDispatcher } from 'svelte';

  export let primary: boolean = false;
  export let backgroundColor: string = '';
  export let size: string = 'medium';
  export let label: string = '';

  let mode: string = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  let style:string = backgroundColor ? `background-color: ${backgroundColor}` : '';

  const dispatch = createEventDispatcher();

  function onClick(event: MouseEvent) {
    dispatch('click', event);
  }
</script>

<button
  type="button"
  class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
  {style}
  on:click={onClick}>
  {label}
</button>
