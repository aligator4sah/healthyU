/** question related model defination*/

export class Domain {
  did: number;
  domain: string;
  weight: number;

  constructor(options: {
    did?: number,
    domain?: string,
    weight?: number,
  } = {}) {
    this.did = options.did;
    this.domain = options.domain;
    this.weight = options.weight || -1;
  }
}

export class Subdomain {
  subdid: number;
  subdomain: string;
  did: number;
  constructor(options: {
    subdid?: number,
    subdomain?: string,
    did?: number,
  } = {}) {
    this.subdid = options.subdid;
    this.subdomain = options.subdomain;
    this.did = options.did || -1;
  }
}

export class Question {
  qid: number;
  key: string;
  label: string;
  hint: string;
  type: string;
  ansOptions: {key: string, value: string}[] = [];
  order: number;
  value: string;
  required: boolean;
  constructor(options: {
    qid?: number,
    key?: string,
    label?: string,
    hint?: string,
    type?: string,
    ansOptions?: any,
    order?: number,
    value?: string,
    required?: boolean,
  } = {}) {
    this.qid = options.qid;
    this.key = options.key || '';
    this.label = options.label;
    this.hint = options.hint || '';
    this.type = options.type;
    this.ansOptions = options.ansOptions || [];
    this.order = options.order || -1;
    this.value = options.value || '';
    this.required = options.required || false;
  }
}

export class DomQuestion extends Question {
  domain: string;
  subdomain: string;
  constructor(options: {} = {}) {
    super(options);
    this.domain = options['domain'] || '';
    this.subdomain = options['subdomain'] || '';
  }
}
