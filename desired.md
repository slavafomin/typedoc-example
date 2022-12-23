
# MyFuncOptions

## Variant 1

This is an ideal format that shows all the documentation in a single table.

| Property                                                                                                            | Type    | Description |
|---------------------------------------------------------------------------------------------------------------------|---------| --- |
| [params](./docs/api-documenter/typedoc-example.paramsbag.params.md) | object | Custom parameters. |
| [params.foo](./docs/api-documenter/typedoc-example.myfuncparams.foo.md)                                                                 | string  | The description of the "foo" property. |
| [params.bar](./docs/api-documenter/typedoc-example.myfuncparams.bar.md)                                                                 | number  | The description of the "bar" property. |
| [qux](./docs/api-documenter/typedoc-example.paramsbag.qux.md)                                                                           | boolean | The description of the "qux" property. |


## Variant 2

This at least has a direct link to the `MyFuncParams` interface.

| Property                                                                                                            | Type | Description |
|---------------------------------------------------------------------------------------------------------------------| --- | --- |
| [params](./docs/api-documenter/typedoc-example.myfuncparams.md) | MyFuncParams | Custom parameters. |
| [qux](./docs/api-documenter/typedoc-example.paramsbag.qux.md)                                                                           | boolean | The description of the "qux" property. |
