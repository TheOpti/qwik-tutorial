import { component$, useStore, useClientEffect$ } from '@builder.io/qwik';

export default component$(( ) => {
  return (
    <>
      <span>Hello world</span>
      <div>
        <Clock />
      </div>
    </>
  )
});

export const Clock = component$(() => {
  const state = useStore({ time: '' });

  useClientEffect$(() => {
    console.debug('inside useClientEffect');
    const update = () => {
      console.debug('inside update');
      state.time = new Date().toLocaleTimeString();
    }

    update();

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  });

  return <span>{state.time}</span>
});
