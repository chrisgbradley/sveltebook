<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import Button from './Button.svelte';

    
</script>

<Meta
  title="Button"
  component={Button}
  argTypes={{
    label: { control: 'text' },
    primary: { control: 'boolean' },
  }}
/>

<Template let:args>
    <Button {...args}/>
</Template>

<Story name="Primary" args={{primary: true, label: ''}}/>

<Story name="Secondary" source args={{primary: false}}/>