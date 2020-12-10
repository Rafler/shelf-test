### How Install finished package

```
$ yarn add @rafler/shelf-test
```

### Usage

```typescript jsx
import {RoleSelector} from '@rafler/shelf-test';

//...
<RoleSelector
  onSelect={/* cb with selected role */}
  onChage={/* cb with fresh custom role */}
  onSubmit={/* cb with submitted data */}
/>;
//...
```

```typescript jsx
import {Select} from '@rafler/shelf-test';

//...
<Select
  values={/* array of strings to be shown in dropdown */}
  onSelect={/* cb with new selected */}
  selected={/* selected value*/}
/>;
//...
```

```typescript jsx
import {Checkbox} from '@rafler/shelf-test';

//...
<Checkbox
  checked={/* indicates is checkbox checked */}
  onClick={/* cb with new boolean value */}
  name={/* checkbox name to be shown*/}
  readonly={/* boolean to deny checkbox change*/}
/>;
//...
```