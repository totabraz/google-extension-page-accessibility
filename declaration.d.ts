// declaration.d.ts
declare module "*.scss" {
  const classes: Record<string, string>;
  export default classes;
}
