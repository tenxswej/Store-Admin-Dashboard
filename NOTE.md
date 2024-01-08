# Best Practices

## Use CSS for text to capitalize

Good

```html
<span className="ml-2 text-sm tracking-wide truncate capitalize">
  reports
</span>
```

Bad

```html
<span className="ml-2 text-sm tracking-wide truncate"> Reports </span>
```

## Don't always depend on "space" if you want to space between two sentence


```tsx
<p className='text-gray-500 dark:text-gray-200 leading-7 tracking-wide my-2 sm:my-4 text-xs sm:text-md'>
  A subtle yet profound approach to the world of modern web development with
  tailwind css. build <span className='text-yellow-400 font-bold'>10</span>{" "}
  projects
</p>
```

## Folder structures & naming

- naming casing
  - Components => Capitalized
  - route => lowercase
  - also can be used as below
    - ComponentName.component.tsx
    - routeName.route.tsx
