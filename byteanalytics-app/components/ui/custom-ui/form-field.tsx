import { IFormField } from '@/lib/types/global';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form';
import { Input } from '../input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select';

export const FormInputField = ({
  control,
  name,
  labelStyle,
  label,
  inputCategory,
  inputType,
  readOnly=false,
  inputStyle,
  required = true,
  placeholder,
  selectList,
}: IFormField) => {
  const InputControl = ({ field }: any) => (
    <FormControl>
      <Input
        readOnly={readOnly}
        type={inputType || "text"}
        className={inputStyle}
        required={required}
        placeholder={placeholder}
        {...field}
      />
    </FormControl>
  );

  const SelectControl = ({ field }: any) => (
    <div className="relative mb-2">
      <Select onValueChange={field.onChange} defaultValue={field.value} disabled={readOnly}>
        <FormControl>
          <SelectTrigger className={inputStyle}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {selectList !== undefined &&
            selectList.map((item, index) => (
              <SelectItem value={item} key={index}>{item}</SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
         {label && <FormLabel className={`${labelStyle}`}>{label}</FormLabel>}
          {inputCategory === 'input' ? (
            <InputControl field={field} />
          ) : (
            <SelectControl field={field} />
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
