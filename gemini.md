# Conversation Context & Gemini Configuration

## 1. Current Project: 7ว่าดัด (Seven-Wa-Dad)
**Description:** A crowdfunding platform prototype for Thai SMEs.
**Type:** Responsive Static Web Application
**Tech Stack:** React, Vite, Bootstrap, Google Fonts ('Prompt').

### Features Implemented
*   **Landing Page:** Displays SME fundraising posts (e.g., "ก๋วยเตี๋ยวป้าณี").
*   **Login System:** Mock "One-Click" login for SMEs and Investors.
*   **SME Dashboard:** Admin interface for "ก๋วยเตี๋ยวป้าณี" to manage posts and view stats.
*   **Investor Dashboard:** Investment opportunities with financial metrics and filters.
*   **UI/UX:** Modern Thai aesthetic, responsive design.

---

## 2. Gemini Model Reference Code
The following Python code snippets have been provided for context regarding Gemini 2.0 Flash and Vertex AI integration.

### OpenRouter Configuration
```python
def setup_gemini_config():
    """
    Create a custom evaluation configuration using Gemini 2.0 Flash via OpenRouter
    """
    # Configure to use Gemini 2.0 Flash via OpenRouter
    evaluation_config = {
        "model_name": "google/gemini-2.0-flash-001",  # OpenRouter format for Gemini
        "provider": "openai_endpoint",  # Use OpenRouter as endpoint
        "openai_endpoint_url": "https://openrouter.ai/api/v1",
        "temperature": 0,  # Zero temp for consistent evaluation
    }

    print(f"Using Gemini 2.0 Flash for evaluation: {evaluation_config}")
    return evaluation_config
```

### GeminiModel Class (Parallel Execution)
```python
class GeminiModel:
    """Class for the Gemini model."""

    def __init__(
        self,
        model_name: str = "gemini-2.0-flash-001",
        finetuned_model: bool = False,
        distribute_requests: bool = False,
        cache_name: str | None = None,
        temperature: float = 0.01,
        **kwargs,
    ):
        self.model_name = model_name
        self.finetuned_model = finetuned_model
        self.arguments = kwargs
        self.distribute_requests = distribute_requests
        self.temperature = temperature
        # ... (Initialization logic)

    @retry(max_attempts=12, base_delay=2, backoff_factor=2)
    def call(self, prompt: str, parser_func=None) -> str:
        # ... (Call logic)

    def call_parallel(
        self,
        prompts: List[str],
        parser_func: Optional[Callable[[str], str]] = None,
        timeout: int = 60,
        max_retries: int = 5,
    ) -> List[Optional[str]]:
        """Calls the Gemini model for multiple prompts in parallel using threads with retry logic."""
        # ... (Parallel execution logic)
```

### Vertex AI Integration (Async Stream)
```python
class Gemini(BaseLlm):
  """Integration for Gemini models."""
  model: str = 'gemini-1.5-flash'

  async def generate_content_async(
      self, llm_request: LlmRequest, stream: bool = False
  ) -> AsyncGenerator[LlmResponse, None]:
    """Sends a request to the Gemini model."""
    # ... (Async generation and streaming logic)
```

### Schema Helper
```python
def _to_gemini_schema(openapi_schema: dict[str, Any]) -> Schema:
  """Converts an OpenAPI schema dictionary to a Gemini Schema object."""
  if openapi_schema is None:
    return None

  if not isinstance(openapi_schema, dict):
    raise TypeError("openapi_schema must be a dictionary")

  openapi_schema = _sanitize_schema_formats_for_gemini(openapi_schema)
  return Schema.from_json_schema(
      json_schema=_ExtendedJSONSchema.model_validate(openapi_schema),
      api_option=get_google_llm_variant(),
  )
```

### Benchmark Usage
```bash
# Run with default settings (1 example)
python run_gemini_benchmark_fixed.py

# Run with custom number of examples
python run_gemini_benchmark_fixed.py --examples 5
```
