// Se estiver no navegador via CDN, o objeto global é 'supabase'
const _supabaseUrl = 'https://cagohgxsuhsnkacwxevh.supabase.co';
const _supabaseAnonKey = 'sb_publishable_CLajXLhrnani32ybIoae7w_PLrNFQ8J';
const supabaseClient = supabase.createClient(_supabaseUrl, _supabaseAnonKey);

async function getDados() {
  const { data, error } = await supabaseClient
    .from('sua_tabela') 
    .select('*');

  if (error) {
    console.error('Erro:', error.message);
  } else {
    console.log('Dados:', data);
  }
}

getDados();

