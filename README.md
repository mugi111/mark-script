<div style="text-align:center"><img src="./assets/markscript.png" width="250px" height="250px" /></div>

# Markscript

Typescript library to generate Markdown.

## Usage

```
import MarkScript from "mark-script";

const markScript = new MarkScript();
```

### Heading

```
markScript.addHead(string, int);
```

#### Example

---

```
markScript.addHead("Sample", 1);
```

↓

# Sample

---

```
markScript.addHead("Sample", 2);
```

↓

## Sample

---

```
markScript.addHead("Sample", 3);
```

↓

### Sample

---

```
markScript.addHead("Sample", 4);
```

↓

#### Sample

---

```
markScript.addHead("Sample", 5);
```

↓

##### Sample

---

```
markScript.addHead("Sample", 6);
```

↓

###### Sample

---

### Text

```
import MarkScript, { TEXT_TYPE } from "mark-script";

.
.
.

markScript.addText(string, TEXT_TYPE?);
```

#### Example

##### Normal

```
markScript.addText("Sample");
```

↓  
Sample

##### highlight

```
markScript.addText("Sample", TEXT_TYPE.HEGHLIGHT);
```

↓  
**Sample**

##### Italic

```
markScript.addText("Sample", TEXT_TYPE.ITALIC);
```

↓  
_Sample_

### Code

#### Example

##### Inline

```
markScript.addCode("console.log(\"Sample\")");
```

↓  
`console.log("Sample");`

##### Block

```
markScript.addCodeBlock("#include <stdio.h>\nint main() {\n\t\tprintf(\"Hello World\");\n}");
```

↓

```
#include <stdio.h>
int main() {
  printf("Hello World");
}
```

### Return

```
markScript.addReturn();
```

↓

### List

```
import MarkScript from "mark-script";

.
.
.

const xxxx = [{ p: string, c: TList }, ... ];
markScript.addList(TList[]);

const xxxx = [{ p: string, c: TList }, ... ];
markScript.addNumberedList(TList[]);
```

#### Example

##### Bullet

```
const clist: Array<TList> = [
  { p: "list1" },
  { p: "list2" },
  { p: "list3" }
];
markScript.addBulletList(clist);
```

↓

- list1
- list2
- list3

---

```
const clist1: Array<TList> = [
  { p: "list1" },
  { p: "list2" },
  { p: "list3" }
];
const clist2: Array<TList> = [
  { p: "plist1" },
  { p: "plist2" },
  { p: "plist3", c: clist1 }
];
markScript.addBulletList(clist2);
```

↓

- plist1
- plist2
- plist3
  - list1
  - list2
  - list3

##### Numbered

```
const clist: Array<TList> = [
  { p: "list1" },
  { p: "list2" },
  { p: "list3" }
];
markScript.addBulletList(clist);
```

↓

1. list1
1. list2
1. list3

### Link

#### Example

```
markScript.addLink("example", "http://example.com/");
```

↓
[example]("http://example.com/")
