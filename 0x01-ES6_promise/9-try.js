export default function guardrail(mathFunction) {
  let queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  }
  catch (err) {
    queue.push(`${err.name}: ${err.message}`)
  }
  finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
