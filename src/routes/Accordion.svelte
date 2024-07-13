<script>
  import GravityUiArrowChevronDown from '~icons/gravity-ui/arrow-chevron-down';

  export let open = false;
	import { slide } from 'svelte/transition';
  
	const handleClick = () => open = !open
</script>

<div class="accordion">
  <div class="header" on:click={handleClick}>
    <div class="text">
      <slot name="head"></slot>	
		</div>
		
		<button >
      <GravityUiArrowChevronDown />
		</button>
	</div>
	
	{#if open}
	<div class="details" transition:slide>
    <slot name="details">
    </slot>
	</div>
	{/if}
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
  
  div.accordion {
		/* margin: 1rem 0; */
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 10px;
    margin-right: 15px;
	}
	
	div.header {
    display:flex;
		/* width:100%; */
    align-items: center;
    padding: 20px;
    background-color: var(--clr-border-edge-alpha);
    backdrop-filter: blur(200px);
    box-shadow: 0px 5px 15px var(--clr-shadow);
    border: 1px solid var(--clr-border);
    border-radius: 4px;
    cursor: pointer;
    color: var(--clr-black);
    transition: color 0.15s, box-shadow 0.15s, border 0.15s;
	}

  div.header:hover {
  color: var(--clr-primary);
  border: 1px solid var(--clr-border-edge);
  box-shadow: 0px 5px 5px var(--clr-shadow);
  }
  
  div.header:hover button {
    background-color: var(--clr-primary-alpha-2);
  }
  
	div.header .text {
    flex: 1;
		margin-right: 5px;
    font-family: 'Oswald';
    font-weight: bold;
	}
	
	div.details {
    margin-top: 20px;
    color: var(--clr-black);
    background-color: var(--clr-border-edge-alpha);
    backdrop-filter: blur(200px);
    box-shadow: 0px 5px 15px var(--clr-shadow);
    border: 1px solid var(--clr-border);
		padding:1rem;
    border-radius: 4px;
    font-family: 'Source Serif 4';
    
	}
  
  button {
    background-color: var(--clr-secondary-alpha-2);
    color: var(--clr-secondary);
    border: 2px solid transparent;
    font-size: 1.2rem;
    height: 40px;
    width: 40px;
    padding: 5px;
    border-radius: 50px;
    transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out;
  }

  @media all and (max-width: 1440px) {
    div.header,
    div.header .text,
    div.details {
      font-size: 0.8rem;
    }
  }

  @media all and (max-width: 768px) {
    div.accordion {
      padding-left: 0px;
    }
  }

  @media all and (max-width: 425px) {
    div.accordion {
      margin-right: 0px;
      margin: 0;
    }
  }
</style>
