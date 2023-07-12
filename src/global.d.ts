type NavigateFunction = import('react-router-dom').NavigateFunction;

interface IGlobalStore {
  $: import('@/shared/stores/__init__');
  layout: import('@/shared/stores/layout');
}

interface NxStatic {
  $root: $;
  $api: any;
  $local: any;
  $event: any;
  $client: any;
  navigate: NavigateFunction;
  LocalStorage: any;
}
